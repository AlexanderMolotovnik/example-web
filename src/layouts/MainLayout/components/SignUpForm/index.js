import React from 'react'
import { Form, Field } from 'react-final-form'
import { InputField, PasswordField } from 'formAdapters/Input'
import validate from './validate'

const SignUpForm = ({ signUpFormSubmit }) => (
  <Form
    onSubmit={signUpFormSubmit}
    validate={validate}
    render={({ handleSubmit }) => (
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="login-modal"
        id="sign-up"
      >
        <Field
          label="Email address"
          name="email"
          component={InputField}
        />
        <Field
          label="Password"
          name="password"
          component={PasswordField}
        />
        <Field
          label="Confirm password"
          name="password_confirmation"
          component={PasswordField}
        />
      </form>
    )}
  />
)

export default SignUpForm
