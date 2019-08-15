import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from '@material-ui/core'
import AccountForm from './components/AccountForm'
import { updateAccountRequest } from './actions'

class Account extends Component {
  accountFormSubmit = values => {
    const { updateAccountRequest } = this.props

    return new Promise(resolve => {
      updateAccountRequest(values, resolve)
    })
  }

  render() {
    const { user } = this.props

    return (
      <Grid
        container
        spacing={6}
        direction="column"
        alignItems="center"
      >
        <Grid item xs={12} sm={8} md={7} lg={6}>
          <AccountForm
            accountFormSubmit={this.accountFormSubmit}
            initialValues={user}
          />
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  user: state.account.user,
})

const mapDispatchToProps = {
  updateAccountRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Account)
