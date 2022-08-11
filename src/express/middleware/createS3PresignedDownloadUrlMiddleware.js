const {createS3PresignedDownloadUrl} = require('../../lib')

function createS3PresignedDownloadUrlMiddleware(s3Client, options={expiresIn: 300}) {
  return async (req, res, next) => {
    try {
      const {bucket, key} = req.body
      res.locals.presignedDownloadUrl = await createS3PresignedDownloadUrl(s3Client, bucket, key, options)
      next()
    } catch (err) {
      next(err)
    }
  }
}


module.exports = createS3PresignedDownloadUrlMiddleware
