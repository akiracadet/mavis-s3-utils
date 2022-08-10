const createS3Client = require('./createS3Client')
const createS3Bucket = require('./createS3Bucket')
const emptyBucket = require('./emptyBucket')

class S3Utils {
  constructor(region, endpoint) {
    this.s3Client = createS3Client(region, endpoint)
  }

  async createS3Bucket(bucket) {
    return await createS3Bucket(this.s3Client, bucket)
  }

  async emptyBucket(bucket) {
    return await emptyBucket(this.s3Client, bucket)
  }
}

module.exports = S3Utils
