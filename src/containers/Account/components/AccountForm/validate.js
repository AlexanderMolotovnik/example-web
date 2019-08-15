import { parsePhoneNumberFromString } from 'libphonenumber-js'
import {
  emailRequired,
  required,
  emailValidate,
  phoneFormat,
} from 'utils/errors'
import { emailRegex } from 'utils/regexes'

const validate = ({
  email,
  name,
  surname,
  phone_number,
}) => {
  const errors = {}
  const phoneNumber = parsePhoneNumberFromString(phone_number || '')

  if (!email) errors.email = emailRequired
  if (email && !emailRegex.test(email)) errors.email = emailValidate
  if (!name) errors.name = required
  if (!surname) errors.surname = required
  if (phoneNumber && !phoneNumber.isValid()) errors.phone_number = phoneFormat

  return errors
}

export default validate
