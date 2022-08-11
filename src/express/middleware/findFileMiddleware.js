const {findFile} = require('../../lib')

function findFileMiddleware(s3Client, options={expiresIn: 300}) {
  return async (req, res, next) => {
    try {
      const {bucket, key} = req.body
      res.locals.fileUrl = await findFile(s3Client, bucket, key, options)
      next()
    } catch (err) {
      next(err)
    }
  }
}

module.exports = findFileMiddleware
