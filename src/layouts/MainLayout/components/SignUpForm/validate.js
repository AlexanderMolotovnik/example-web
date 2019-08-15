import {
  emailRequired,
  emailValidate,
  passwordRequired,
  passwordConfirmationRequired,
  passwordsMatch,
} from 'utils/errors'
import { emailRegex } from 'utils/regexes'

const validate = ({
  email,
  password,
  password_confirmation,
}) => {
  const errors = {}

  if (!email) errors.email = emailRequired
  if (email && !emailRegex.test(email)) errors.email = emailValidate
  if (!password) errors.password = passwordRequired
  if (!password_confirmation) errors.password_confirmation = passwordConfirmationRequired
  if (password && password_confirmation && password !== password_confirmation) {
    errors.password_confirmation = passwordsMatch
  }

  return errors
}

export default validate
