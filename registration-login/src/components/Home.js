import { Typography } from '@mui/material'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Typography
                variant="h4"
                component="div"
                sx={{ position: 'absolute', top: '50%', left: '50%', 
                     color: "black", transform: 'translate(-50%,-50%)' }}
            >
               <h1>Welcome</h1>

            </Typography>
    </div>
  )
}
