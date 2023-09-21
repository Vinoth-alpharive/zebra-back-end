const { matchedData } = require('express-validator')

const { registerUser, setUserInfo, returnRegisterToken } = require('./helpers')
const { generateToken } = require('./helpers/generateToken')
const { handleError } = require('../../middleware/utils')
const {
  emailExists,
  sendRegistrationEmailMessage
} = require('../../middleware/emailer')
const otpGenerator = require('otp-generator')
const ejs = require('ejs')
const path = require('path')
/**
 * Register function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const register = async (req, res) => {
  try {
    // Gets locale from header 'Accept-Language'
    const locale = req.getLocale()
    req = matchedData(req)
    const doesEmailExists = await emailExists(req.email)
    if (!doesEmailExists) {
      req.otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false
      })
      const item = await registerUser(req)
      const userInfo = await setUserInfo(item)
      const filedata = path.join(__dirname, '../../../views/verify.ejs')
      const response = await generateToken(item._id)
      

      ejs.renderFile(
        filedata,
          {username: item.name,image:`${process.env.BACKEND}/image/logo.png`,url:`${process.env.FRONTEND}/${response}`},
        async (err, str) => {
          if (err) {
            return err
          } else {
            await sendRegistrationEmailMessage(locale, item, str)
          }
        }
      )
      // const response = await returnRegisterToken(item, userInfo)
      // sendRegistrationEmailMessage(locale, item)
      res.status(200).json({
        success: true,
        result: userInfo,
        message: "Registred Successfully"
      })
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { register }
