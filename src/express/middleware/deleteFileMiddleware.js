const {deleteFile} = require('../../lib')

function deleteFileMiddleware(s3Client) {
  return async (req, res, next) => {
    try {
      const {bucket, key} = req.body
      await deleteFile(s3Client, bucket, key)
      next()
    } catch (err) {
      next(err)
    }
  }
}

module.exports = deleteFileMiddleware
