const { PutObjectCommand, S3Client } = require("@aws-sdk/client-s3");

const s3Client = new S3Client({
  endpoint: "https://nyc3.digitaloceanspaces.com",
  forcePathStyle: false,
  region: "nyc3",
  credentials: {
    accessKeyId: "DO0088PRZ48CZFKLY94T",
    secretAccessKey: process.env.BUCKET_KEY,
  },
});

const params = {
  Bucket: "bridgystorage",
  Key: "tables/test.txt",
  Body: "heelo",
  ACL: "private",
};

const uploadObject = async () => {
  try {
    const data = await s3Client.send(new PutObjectCommand(params));
    console.log(
      "Successfully uploaded object: " + params.Bucket + "/" + params.Key
    );
    return data;
  } catch (err) {
    console.log("Error", err);
  }
};

module.exports = uploadObject;
