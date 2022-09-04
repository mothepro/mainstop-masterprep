import { AppBar, Toolbar, Typography } from '@mui/material'
import { cloneElement } from 'react'

export default function Header() {
  return <AppBar>
        <Toolbar>
          <Typography variant='h6' component='div'>
            Mainstop Masterprep
          </Typography>
        </Toolbar>
      </AppBar>
}
