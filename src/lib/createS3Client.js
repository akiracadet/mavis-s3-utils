const {S3Client} = require('@aws-sdk/client-s3')

function createS3Client(region, endpoint) {
  const AWS_ACCESS_KEY_ID = process?.env?.AWS_ACCESS_KEY_ID
  const AWS_SECRET_ACCESS_KEY = process?.env?.AWS_SECRET_ACCESS_KEY

  if (!AWS_ACCESS_KEY_ID) throw new Error('Missing AWS_ACCESS_KEY_ID')
  if (!AWS_SECRET_ACCESS_KEY) throw new Error('Missing AWS_SECRET_ACCESS_KEY')

  return new S3Client({region, endpoint, forcePathStyle: true})
}

module.exports = createS3Client
