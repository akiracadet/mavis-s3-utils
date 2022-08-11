const {createS3PresignedUploadUrl} = require('../../lib')

function createS3PresignedUploadUrlMiddleware(s3Client, options={expiresIn: 300}) {
  return async (req, res, next) => {
    try {
      const {bucket, key} = req.body
      res.locals.presignedUploadUrl = await createS3PresignedUploadUrl(s3Client, bucket, key, options)
      next()
    } catch (err) {
      next(err)
    }
  }
}


module.exports = createS3PresignedUploadUrlMiddleware
