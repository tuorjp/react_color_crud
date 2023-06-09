/* eslint-disable prettier/prettier */
import { Box, TextField, Typography } from '@mui/material'
import { useState } from 'react'

export function ColorPicker() {
  const [color, setColor] = useState('')
  return (
    <Box display="flex" justifyContent="center" mt={10}>
      <Box
        sx={{ backgroundColor: '#222338', p: 6, borderRadius: 3, gap: 2 }}
        display="flex"
        flexDirection="column"
      >
        <Typography variant="h4">Hey, I'm homepage</Typography>
        <Box display="flex" justifyContent="center">
          <Box
            sx={{
              backgroundColor: color || '#ccc',
              width: 800,
              height: 300,
              mt: 5,
              borderRadius: 3,
            }}
          ></Box>
        </Box>
        <Box display="flex" justifyContent="center" mt={4}>
          <TextField
            name="color"
            label="Write a hex color!"
            onChange={(e) => setColor(e.target.value)}
          />
        </Box>
      </Box>
    </Box>
  )
}
