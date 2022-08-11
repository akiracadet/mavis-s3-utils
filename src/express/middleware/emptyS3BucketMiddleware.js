const {emptyS3Bucket} = require('../../lib')

function emptyS3BucketMiddleware(s3Client) {
  return async (req, res, next) => {
    try {
      const {bucket} = req.body
      await emptyS3Bucket(s3Client, bucket)
      next()
    } catch (err) {
      next(err)
    }
  }
}

module.exports = emptyS3BucketMiddleware
