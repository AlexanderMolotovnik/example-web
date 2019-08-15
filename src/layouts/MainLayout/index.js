import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'components/Modal'
import withModal from 'hocs/withModal'
import externalSubmit from 'utils/externalSubmit'
import Header from './components/Header'
import Footer from './components/Footer'
import SignInForm from './components/SignInForm'
import SignUpForm from './components/SignUpForm'
import Drawer from './components/Drawer'
import {
  signInRequest,
  signUpRequest,
  logout,
} from 'containers/Account/actions'
import './styles.css'

class MainLayout extends Component {
  state = {
    drawerOpened: false,
  }

  signInFormSubmit = values => {
    const { signInRequest, closeModal } = this.props

    return new Promise(resolve => {
      signInRequest(values, resolve, closeModal)
    })
  }

  signUpFormSubmit = values => {
    const { signUpRequest, closeModal } = this.props

    return new Promise(resolve => {
      signUpRequest(values, resolve, closeModal)
    })
  }

  toggleDrawer = () => {
    this.setState(prevState => ({ drawerOpened: !prevState.drawerOpened }))
  }

  render() {
    const { drawerOpened } = this.state
    const {
      children,
      showModal,
      closeModal,
      openedModal,
      user,
      logout,
    } = this.props

    return (
      <>
        <Header
          showModal={showModal}
          isSignedIn={user}
          logout={logout}
          toggleDrawer={this.toggleDrawer}
        />
        <Drawer
          user={user}
          drawerOpened={drawerOpened}
          toggleDrawer={this.toggleDrawer}
        />
        <div className="content-container">
          <div className="content-wrapper">
            {children}
          </div>
          <Footer />
        </div>
        <Modal
          title="Sign in"
          submitText="Sign in"
          onClose={closeModal}
          onSubmit={() => externalSubmit('sign-in')}
          open={openedModal === 'signIn'}
        >
          <SignInForm signInFormSubmit={this.signInFormSubmit} />
        </Modal>
        <Modal
          title="Sign up"
          submitText="Sign up"
          onClose={closeModal}
          onSubmit={() => externalSubmit('sign-up')}
          open={openedModal === 'signUp'}
        >
          <SignUpForm signUpFormSubmit={this.signUpFormSubmit} />
        </Modal>
      </>
    )
  }
}

const mapStateToProps = state => ({
  user: state.account.user,
})

const mapDispatchToProps = {
  signInRequest,
  signUpRequest,
  logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(withModal(MainLayout))
