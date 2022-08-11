const {CopyObjectCommand} = require('@aws-sdk/client-s3')

async function copyFile(s3Client, srcBucket, srcKey, destBucket, destKey) {
  try {
    const data = await s3Client.send(new CopyObjectCommand({
      CopySource: `/${srcBucket}/${srcKey}`,
      Bucket: destBucket,
      Key: destKey
    }))

    return data
  } catch (err) {
    throw new Error(err.name)
  }
}

module.exports = copyFile
