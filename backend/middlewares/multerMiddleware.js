const multer = require("multer");
const path = require("path");
const checkFileType = require("../misc/checkFileType");

const imageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads/");
  },

  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const imageUpload = multer({
  storage: imageStorage,
  limits: { fileSize: 100000000 },
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
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

const tableUpload = multer({
  storage: tableStorage,
  limits: { fileSize: 100000000 },
  ///file filter
});

module.exports = { imageUpload, tableUpload };
