const createS3BucketMiddleware = require('./createS3BucketMiddleware')
const deleteS3BucketMiddleware = require('./deleteS3BucketMiddleware')
const emptyS3BucketMiddleware = require('./emptyS3BucketMiddleware')
const copyFileMiddleware = require('./copyFileMiddleware')
const createS3PresignedUploadUrlMiddleware = require('./createS3PresignedUploadUrlMiddleware')
const deleteFileMiddleware = require('./deleteFileMiddleware')
const findFileMiddleware = require('./findFileMiddleware')

module.exports = {
  createS3BucketMiddleware,
  deleteS3BucketMiddleware,
  emptyS3BucketMiddleware,
  copyFileMiddleware,
  createS3PresignedUploadUrlMiddleware,
  deleteFileMiddleware,
  findFileMiddleware,
}
