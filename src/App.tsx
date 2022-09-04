import React from 'react'
import './App.css'
import { CssBaseline, Dialog, DialogContent } from '@mui/material'
import { event } from './util/analytics'
import Testimonials from './components/Testimonials'

export default function App() {
  return (
    <>
      <CssBaseline />
      <div className='App'>
        <Dialog
          fullWidth
          maxWidth='md'
          open={false}
          onClose={() => event({ category: 'dialog', action: 'close' })}
          sx={{
            textAlign: 'center',
          }}
        >
          <DialogContent sx={{ minWidth: 640 }}>
            <iframe
              title='Contact form'
              src='https://docs.google.com/forms/d/e/1FAIpQLSci6KwpXOD4a5s62ZaRO6Jao_7gjSGa1OsT-_wjxhE7QoPB8w/viewform?embedded=true'
              width={640}
              height={1220}
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}>
              Loading…
            </iframe>
          </DialogContent>
        </Dialog>
        <Testimonials/>
      </div>
    </>
  )
}
