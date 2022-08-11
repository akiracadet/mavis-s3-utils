const {deleteS3Bucket} = require('../../lib')

function deleteS3BucketMiddleware(s3Client) {
  return async (req, res, next) => {
    try {
      const {bucket, options} = req.body
      await deleteS3Bucket(s3Client, bucket, options)
      next()
    } catch (err) {
      next(err)
    }
  }
}

module.exports = deleteS3BucketMiddleware
