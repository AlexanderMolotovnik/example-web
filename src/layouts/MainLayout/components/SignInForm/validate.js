import {
  emailRequired,
  passwordRequired,
  emailValidate,
} from 'utils/errors'
import { emailRegex } from 'utils/regexes'

const validate = ({ email, password }) => {
  const errors = {}

  if (!email) errors.email = emailRequired
  if (email && !emailRegex.test(email)) errors.email = emailValidate
  if (!password) errors.password = passwordRequired

  return errors
}

export default validate
