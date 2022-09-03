import React from 'react'
import logo from './logo.svg'
import './App.css'
import { CssBaseline } from '@mui/material'

export default function App() {
  return (
    <>
      <CssBaseline />
      <div className='App'>
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
      </div>
    </>
  )
}
