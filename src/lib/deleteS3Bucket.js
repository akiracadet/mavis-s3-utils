const {DeleteBucketCommand} = require("@aws-sdk/client-s3")
const emptyS3Bucket = require('./emptyS3Bucket')

async function deleteS3Bucket(s3Client, bucket, options={forceDelete: false}) {
  try {
    if (options?.forceDelete) await emptyS3Bucket(s3Client, bucket)

    const data = await s3Client.send(new DeleteBucketCommand({Bucket: bucket}))
    return data
  } catch (err) {
    throw new Error(err.name)
  }
}

module.exports = deleteS3Bucket
