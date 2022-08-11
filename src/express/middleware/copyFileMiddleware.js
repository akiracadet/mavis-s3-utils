const {copyFile} = require('../../lib')

function copyFileMiddleware(s3Client) {
  return async (req, res, next) => {
    try {
      const {srcBucket, srcKey, destBucket, destKey} = req.body
      await copyFile(s3Client, srcBucket, srcKey, destBucket, destKey)
      next()
    } catch (err) {
      next(err)
    }
  }
}

module.exports = copyFileMiddleware
