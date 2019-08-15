import React, { useState } from 'react'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import IconButton from '@material-ui/core/IconButton'
import NumberFormat from 'react-number-format'

export const InputField = ({ input, ...rest }) => {
  const isError = (rest.meta.touched || rest.meta.submitError) && (rest.meta.error || (rest.meta.submitError &&
    !rest.meta.dirtySinceLastSubmit && rest.meta.submitFailed))

  return (
    <FormControl
      error={Boolean(isError)}
      margin="normal"
      fullWidth
    >
      <InputLabel htmlFor={rest.name}>
        {rest.label}
      </InputLabel>
      <Input
        {...rest}
        {...input}
      />
      {isError && <FormHelperText>{rest.meta.error || rest.meta.submitError}</FormHelperText>}
    </FormControl>
  )
}

export const PasswordField = ({ input, ...rest }) => {
  const [showPassword, handleClickShowPassword ] = useState(false)

  return (
    <InputField
      {...input}
      {...rest}
      type={showPassword ? 'text' : 'password'}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="Toggle password visibility"
            onClick={() => handleClickShowPassword(!showPassword)}
          >
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>
      }
    />
  )
}

export const PhoneMask = ({
  inputRef,
  value,
  ...props,
}) => (
  <NumberFormat
    {...props}
    prefix="+"
  />
)
