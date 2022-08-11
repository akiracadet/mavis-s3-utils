const createS3Bucket = require('./createS3Bucket')
const deleteS3Bucket = require('./deleteS3Bucket')
const emptyS3Bucket = require('./emptyS3Bucket')
const createS3Client = require('./createS3Client')
const copyFile = require('./copyFile')
const createS3PresignedDownloadUrl = require('./createS3PresignedDownloadUrl')
const createS3PresignedUploadUrl = require('./createS3PresignedUploadUrl')
const deleteFile = require('./deleteFile')
const uploadFile = require('./uploadFile')

class S3Utils {
  constructor(region, endpoint) {
    this.s3Client = createS3Client(region, endpoint)
  }

  async createS3Bucket(bucket) {
    return await createS3Bucket(this.s3Client, bucket)
  }

  async deleteS3Bucket(bucket, options={forceDelete: false}) {
    return await deleteS3Bucket(this.s3Client, bucket, options)
  }

  async emptyS3Bucket(bucket) {
    return await emptyS3Bucket(this.s3Client, bucket)
  }

  async copyFile(srcBucket, srcKey, destBucket, destKey) {
    return await copyFile(this.s3Client, srcBucket, srcKey, destBucket, destKey)
  }

  async createS3PresignedDownloadUrl(bucket, key, options={expiresIn: 300}) {
    return await createS3PresignedDownloadUrl(this.s3Client, bucket, key, options)
  }

  async createS3PresignedUploadUrl(bucket, key, options={expiresIn: 300}) {
    return await createS3PresignedUploadUrl(this.s3Client, bucket, key, options)
  }

  async deleteFile(bucket, key) {
    return await deleteFile(this.s3Client, bucket, key)
  }

  async uploadFile(bucket, key, file) {
    return await uploadFile(this.s3Client, bucket, key, file)
  }
}

module.exports = S3Utils
