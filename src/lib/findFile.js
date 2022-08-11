const {HeadObjectCommand} = require('@aws-sdk/client-s3')
const createS3PresignedDownloadUrl = require('./createS3PresignedDownloadUrl')

async function findFile(s3Client, bucket, key, options={expiresIn: 300}) {
  try {
    const command = new HeadObjectCommand({
      Bucket: bucket,
      Key: key
    })

    await s3Client.send(command)
    return await createS3PresignedDownloadUrl(s3Client, bucket, key, options)
  } catch (err) {
    if (err.name === 'NotFound') {
      return null
    } else {
      throw new Error(err.name)
    }
  }
}

module.exports = findFile
