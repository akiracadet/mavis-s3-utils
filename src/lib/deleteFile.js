const {DeleteObjectCommand} = require('@aws-sdk/client-s3')

async function deleteFile(s3Client, bucket, key) {
  try {
    const data = await s3Client.send(new DeleteObjectCommand({
      Bucket: bucket,
      Key: key
    }))

    return data
  } catch (err) {
    throw new Error(err.name)
  }
}

module.exports = deleteFile
