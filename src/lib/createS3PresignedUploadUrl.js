const {PutObjectCommand} = require('@aws-sdk/client-s3')
const {getSignedUrl} = require('@aws-sdk/s3-request-presigner')

async function createS3PresignedUploadUrl(s3Client, bucket, key, options={expiresIn: 300}) {
  try {
    const command = new PutObjectCommand({
      Bucket: bucket,
      Key: key,
    })

    const signedUrl = await getSignedUrl(s3Client, command, {
      expiresIn: options?.expiresIn || 300
    })

    return signedUrl
  } catch (err) {
    throw new Error(err.name)
  }
}

module.exports = createS3PresignedUploadUrl
