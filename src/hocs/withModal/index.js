import React, { Component } from 'react'

export default WrappedComponent => {
  class HOC extends Component {
    state = {
      openedModal: '',
    }

    showModal = name => this.setState({ openedModal: name })

    closeModal = () => this.setState({ openedModal: '' })

    render() {
      const { openedModal } = this.state

      return (
        <WrappedComponent
          {...this.props}
          showModal={this.showModal}
          closeModal={this.closeModal}
          openedModal={openedModal}
        />
      )
    }
  }

  return HOC
}
