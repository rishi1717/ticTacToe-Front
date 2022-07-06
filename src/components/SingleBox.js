import { Box } from '@mui/material'
import React from 'react'

function SingleBox() {
  return (
   <Box sx={{
        width: { xs: 50, md: 100 },
        border: "1px solid black",
   }}></Box>
  )
}

export default SingleBox