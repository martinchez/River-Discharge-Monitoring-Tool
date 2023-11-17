import { ColorModeContext, useMode } from './theme'
import { CssBaseLibe, CssBaseline, ThemeProvider } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import Topbar from './scenes/global/topbar'
import Sidebar from './scenes/global/sidebar'
import Dashboard from './scenes/dashboards'
import Team from './scenes/team'
import Contacts from './scenes/contacts'
import Form from './scenes/form'
import Calender from './scenes/calender'
import FAQ from './scenes/faq'
import Discharge from './scenes/discharge'
import Abstractions from './scenes/abstractions'
import WaterSheds from './scenes/Watersheds'
import Geoportal from './scenes/geoportal'
import Abstractors from './scenes/abstractors'
// import Weather from './scenes/weather'
function App() {
  const [theme, colorMode] = useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calender" element={<Calender />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/discharge" element={<Discharge />} />
              <Route path="/abstractions" element={<Abstractions />} />
              <Route path="/Watersheds" element={<WaterSheds />} />
              <Route path="/geoportal" element={<Geoportal />} />
              <Route path="/abstractors" element={<Abstractors />} />

              {/* <Route path="/weather" element={<Weather />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
