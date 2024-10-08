const i18n = require('i18n')
const { prepareToSendEmail } = require('./prepareToSendEmail')

/**
 * Sends registration email
 * @param {string} locale - locale
 * @param {Object} user - user object
 */
const sendRegistrationEmailMessage = (locale = '', user = {}, str) => {
  i18n.setLocale(locale)
  const subject = 'Verify Email'
  const htmlMessage = str
  prepareToSendEmail(user, subject, htmlMessage)
}

const sendFormDetails = (locale = '', user = {}, str) => {
  i18n.setLocale(locale)
  const subject = 'Form Request'
  const htmlMessage = str
  prepareToSendEmail(user, subject, htmlMessage)
}

module.exports = { sendRegistrationEmailMessage, sendFormDetails }
