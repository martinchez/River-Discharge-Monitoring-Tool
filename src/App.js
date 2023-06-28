import Topbar from './scenes/global/topbar'
import { colorModeContext, useMode } from './theme'
import { CssBaseLibe, CssBaseline, ThemeProvider } from '@mui/material'

function App() {
  const[theme, colorMode] = useMode()
  return (
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className='content'>
            <Topbar/>
          </main>
        </div>
      </ThemeProvider>
    </colorModeContext.Provider>
  )
}

export default App
