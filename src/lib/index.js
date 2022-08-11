// classes
const S3Utils = require('./S3Utils')

// bucket related methods
const createS3Bucket = require('./createS3Bucket')
const deleteS3Bucket = require('./deleteS3Bucket')
const emptyS3Bucket = require('./emptyS3Bucket')

// client related methods
const createS3Client = require('./createS3Client')

// file related methods
const copyFile = require('./copyFile')
const createS3PresignedDownloadUrl = require('./createS3PresignedDownloadUrl')
const createS3PresignedUploadUrl = require('./createS3PresignedUploadUrl')
const deleteFile = require('./deleteFile')
const uploadFile = require('./uploadFile')

module.exports = {
  copyFile,
  createS3Client,
  createS3Bucket,
  createS3PresignedDownloadUrl,
  createS3PresignedUploadUrl,
  deleteFile,
  deleteS3Bucket,
  emptyS3Bucket,
  S3Utils,
  uploadFile
}
