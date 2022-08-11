const {createS3Bucket} = require('../../lib')

function createS3BucketMiddleware(s3Client) {
  return async (req, res, next) => {
    try {
      const {bucket} = req.body
      await createS3Bucket(s3Client, bucket)
      next()
    } catch (err) {
      next(err)
    }
  }
}

module.exports = createS3BucketMiddleware
