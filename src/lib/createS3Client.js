const {S3Client} = require('@aws-sdk/client-s3')

function createS3Client(region, endpoint) {
  return new S3Client({region, endpoint, forcePathStyle: true})
}

module.exports = createS3Client
