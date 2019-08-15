import React from 'react'
import { Form, Field } from 'react-final-form'
import { InputField, PasswordField } from 'formAdapters/Input'
import validate from './validate'

const SignInForm = ({ signInFormSubmit }) => (
  <Form
    onSubmit={signInFormSubmit}
    validate={validate}
    render={({ handleSubmit }) => (
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="login-modal"
        id="sign-in"
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
      </form>
    )}
  />
)

export default SignInForm
