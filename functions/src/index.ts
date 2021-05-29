import axios from 'axios'
import * as functions from 'firebase-functions'
import { db } from './utils/firebase'
export const contactForm = functions.https.onCall(async (data, context) => {
  const { values } = data
  const { name, email, message, recaptchaToken } = values
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (
    name.length < 5 ||
    email.length < 5 ||
    message.length < 20 ||
    !emailRegex.test(email)
  ) {
    console.log('bad request')
    return { status: 'error' }
  }

  const secretToken = functions.config().recaptcha.secret
  const recaptchaStatus = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretToken}&response=${recaptchaToken}`,
  )

  if (!recaptchaStatus.data.success) {
    console.log('bad captcha')
    return {
      status: 'error',
    }
  }

  db.collection('responses').add(values)

  return { status: 'success' }
})
