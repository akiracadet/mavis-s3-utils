const {CreateBucketCommand} = require('@aws-sdk/client-s3')

async function createS3Bucket(s3Client, bucket) {
  try {
    const data = await s3Client.send(new CreateBucketCommand({Bucket: bucket}))
    return data
  } catch (err) {
    throw new Error(err.name)
  }
}

module.exports = createS3Bucket
