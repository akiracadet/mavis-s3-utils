const {HeadBucketCommand} = require('@aws-sdk/client-s3')

async function findS3Bucket(s3Client, bucket) {
  try {
    const data = await s3Client.send(new HeadBucketCommand({
      Bucket: bucket
    }))

    return data
  } catch (err) {
    if (err.name === 'NotFound') {
      return null
    } else {
      throw new Error(err.name)
    }
  }
}

module.exports = findS3Bucket
