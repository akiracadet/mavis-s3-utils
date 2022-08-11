const {ListObjectsCommand, DeleteObjectCommand} = require('@aws-sdk/client-s3')

async function emptyS3Bucket(s3Client, bucket) {
  try {
    const data = await s3Client.send(new ListObjectsCommand({Bucket: bucket}))
    if (!data.Contents) return

    let i = 0
    for (let i = 0; i < data.Contents.length; i++) {
      const data = await s3Client.send(
        new DeleteObjectCommand({
          Bucket: bucket,
          Key: data.Contents[i].Key
        })
      )
    }

    return data
  } catch (err) {
    throw new Error(err.name)
  }
}

module.exports = emptyS3Bucket
