/* eslint-disable prettier/prettier */
import { Box, Button, Typography } from '@mui/material'
import { Outlet, useNavigate } from 'react-router'

export function DefaultLayout() {
  const navigate = useNavigate()
  return (
    <Box sx={{ backgroundColor: '#0d1320', height: '100vh', color: '#ccc' }}>
      <Box
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        sx={{
          height: '9rem',
          width: '100%',
          mb: 5,
          borderBottom: '1px solid #cdcdcd',
        }}
      >
        <Box>
          <Typography variant="h2">Header</Typography>
        </Box>
        <Box>
          <Button onClick={() => navigate('/')}>Home</Button>
        </Box>
        <Box>
          <Button onClick={() => navigate('/table')}>Table</Button>
        </Box>
      </Box>
      <Box sx={{height: '100', mb:0}} display='flex' flexDirection='row' justifyContent='center'>
        <Outlet />
      </Box>
    </Box>
  )
}
