import React from 'react'
import Table from 'antd/es/table'
import 'antd/es/table/style/index.css'
import 'antd/es/pagination/style/index.css'
import 'antd/es/select/style/index.css'
import 'antd/es/spin/style/index.css'

const CustomTable = ({ paginationProps, ...props }) => (
  <Table
    pagination={{
      hideOnSinglePage: true,
      ...paginationProps,
    }}
    {...props}
  />
)

export default CustomTable
