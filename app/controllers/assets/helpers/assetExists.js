const Asset = require('../../../models/assets')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Checks if a asset already exists in database
 * @param {string} source - asset symbol of item
 */
const assetExists = (coinpair = '') => {
  return new Promise((resolve, reject) => {
    Asset.findOne(
      {
        coinpair
      },
      (err, item) => {
        if (err) {
          return reject(buildErrObject(422, err.message))
        }

        if (item) {
          return reject(buildErrObject(422, 'ASSET PAIR ALREADY EXISTS'))
        }
        resolve(false)
      }
    )
  })
}

module.exports = { assetExists }
