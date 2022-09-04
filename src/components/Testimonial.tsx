import type testimonials from '../data/testimonials.json'
import { FC } from 'react'
import { CardContent, Typography, Card } from '@mui/material'

export default ({ name, phone, content }: Partial<typeof testimonials[number]>) => (
  <Card sx={{ width: 420 }}>
    <CardContent sx={{ textAlign: 'left' }}>
      <Typography variant='body2' color='text.secondary'>
        {content}
      </Typography>
      <br/>
      <Typography gutterBottom variant='h5'>
        {name ?? phone}
      </Typography>
    </CardContent>
  </Card>
)
