import { Box, Typography } from "@mui/material";
import { Outlet } from "react-router";


export function DefaultLayout() {
  return (
    <Box sx={{ backgroundColor: "#0d1320", height: '100vh', color: '#ccc' }}>
      <Box
        display='flex'
        justifyContent='space-evenly'
        alignItems='center'
        sx={{ height: '9rem', width: '100%', mb: 5, borderBottom: '1px solid #cdcdcd'}}
      >
        <Typography variant="h2">Header</Typography>
      </Box>
      <Box>
        <Outlet />
      </Box>
    </Box>
  )
}