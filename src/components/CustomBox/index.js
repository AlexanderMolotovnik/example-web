import React from 'react'
import Box from '@material-ui/core/Box'

const CustomBox = ({ children, ...props }) => (
  <Box
    bgcolor="background.paper"
    p={{xs: 2, sm: 3, md: 4}}
    boxShadow={3}
    {...props}
  >
    {children}
  </Box>
)

export default CustomBox
