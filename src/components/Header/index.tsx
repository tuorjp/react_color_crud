/* eslint-disable prettier/prettier */
import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router'

export function Header() {
  const navigate = useNavigate()

  return (
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
        <Typography 
          variant="h2" 
          sx={{cursor: 'pointer'}} 
          onClick={() => navigate('/')}
        >
          Fav-Color CRUD
        </Typography>
      </Box>
      <Box>
        <Button onClick={() => navigate('/')}>Home</Button>
      </Box>
      <Box>
        <Button onClick={() => navigate('/table')}>List</Button>
      </Box>
    </Box>
  )
}
