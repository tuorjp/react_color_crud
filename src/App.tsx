import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes'
import { CssBaseline, ThemeProvider } from '@mui/material'
import useCustomMuiTheme from './theme'

function App() {
  const theme = useCustomMuiTheme()

  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Router />
      <CssBaseline />
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
