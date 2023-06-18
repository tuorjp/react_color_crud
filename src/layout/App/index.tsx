/* eslint-disable prettier/prettier */
import { Box } from '@mui/material'
import { Outlet } from 'react-router'
import { Header } from '../../components/Header'

export function DefaultLayout() {

  return (
    <Box sx={{ backgroundColor: '#0d1320', height: '100vh', width: '100vw', color: '#ccc', mb: 0 }}>
      <Header />
      <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
        <Outlet />
      </Box>
    </Box>
  )
}
