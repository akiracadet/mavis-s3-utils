const {PutObjectCommand} = require('@aws-sdk/client-s3')
const path = require('path')
const fs = require('fs')

async function uploadFile(s3Client, bucket, key, file) {
  try {
    const fileStream = fs.createReadStream(file)
    const data = await s3Client.send(new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: fileStream
    }))

    return data
  } catch (err) {
    throw new Error(err.name)
  }
}

module.exports = uploadFile
