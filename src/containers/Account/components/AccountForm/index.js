import React from 'react'
import { Form, Field } from 'react-final-form'
import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { InputField, PhoneMask } from 'formAdapters/Input'
import Box from 'components/CustomBox'
import validate from './validate'

const AccountForm = ({ accountFormSubmit, initialValues }) => (
  <Box>
    <Form
      onSubmit={accountFormSubmit}
      initialValues={initialValues}
      validate={validate}
      render={({ handleSubmit, values }) => (
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <Grid container spacing={4} justify="flex-end">
            <Grid item xs={12} lg={6}>
              <Field
                label="First name"
                name="name"
                component={InputField}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Field
                label="Last name"
                name="surname"
                component={InputField}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Field
                label="Email"
                name="email"
                component={InputField}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Field
                label="Phone number"
                name="phone_number"
                component={InputField}
                inputComponent={PhoneMask}
              />
            </Grid>
            <Grid item xs={12} lg={3} xl={2}>
              <Button
                color="primary"
                variant="contained"
                type="submit"
                fullWidth
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    />
  </Box>
)

export default AccountForm
