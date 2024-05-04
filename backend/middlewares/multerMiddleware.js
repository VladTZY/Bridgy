const multer = require("multer");
const path = require("path");
const { S3Client } = require("@aws-sdk/client-s3");
const multerS3 = require("multer-s3");
const checkFileType = require("../utils/checkFileType");

const imageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads/");
  },

  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const tableStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/tables/");
  },

  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const s3 = new S3Client({
  endpoint: "https://nyc3.digitaloceanspaces.com",
  region: "nyc3",
  credentials: {
    accessKeyId: process.env.BUCKET_ACCESS_KEY,
    secretAccessKey: process.env.BUCKET_SECRET_KEY,
  },
});

const imageUpload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.BUCKET_NAME,
    acl: "public-read",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(
        null,
        "missions_images/" + uniqueSuffix + path.extname(file.originalname)
      );
    },
  }),
  limits: { fileSize: 100000000 },
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
});

const resumeUpload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.BUCKET_NAME,
    acl: "public-read",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, "resumes/" + uniqueSuffix + path.extname(file.originalname));
    },
  }),
  limits: { fileSize: 100000000 },
});

const tableUpload = multer({
  storage: tableStorage,
  limits: { fileSize: 100000000 },
  ///file filter
});

module.exports = { imageUpload, resumeUpload, tableUpload };
