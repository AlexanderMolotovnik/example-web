import React, { Component } from 'react'
import { connect } from 'react-redux'
import queryString from 'query-string'
import Table from 'components/CustomTable'
import Box from 'components/CustomBox'
import { getUsersRequest } from './actions'
import tableConfig from './tableConfig'
import './styles.css'

class Users extends Component {
  state = {
    queryParams: '',
    searchValue: '',
  }

  componentDidMount() {
    const { getUsersRequest } = this.props

    getUsersRequest(queryString.stringify({ page: 1, per_page: 20 }))
  }

  render() {
    const {
      users,
      usersLoading,
      getUsersRequest,
      pagination,
    } = this.props

    return (
      <Box p={undefined}>
        <Table
          rowKey={record => record.id}
          bordered
          dataSource={users}
          columns={tableConfig}
          loading={usersLoading}
          paginationProps={{
            total: pagination.total,
            current: pagination.current_page,
            showSizeChanger: true,
            onShowSizeChange: (page, perPage) => {
              getUsersRequest(queryString.stringify({ page: 1, per_page: perPage }))
            },
            onChange: (page, perPage) => {
              getUsersRequest(queryString.stringify({ page, per_page: perPage }))
            },
          }}
        />
      </Box>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users.users,
  usersLoading: state.users.usersLoading,
  pagination: state.users.pagination,
})

const mapDispatchToProps = ({
  getUsersRequest,
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)
