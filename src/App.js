import { ColorModeContext, useMode } from './theme'
import { CssBaseLibe, CssBaseline, ThemeProvider } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import Topbar from './scenes/global/topbar'
import Sidebar from './scenes/global/sidebar'
import Dashboard from './scenes/dashboards'
import Team from './scenes/team'
import Invoice from './scenes/invoices'
import Contacts from './scenes/contacts'
import Form from './scenes/form'
import Calender from './scenes/calender'
import FAQ from './scenes/faq'
import Bar from './scenes/bar'
import Pie from './scenes/pie'
import Line from './scenes/line'
import Geography from './scenes/geography'
// import Discharge from './scenes/discharge'
// import Abstraction from './scenes/abstraction'
// import Watershed from './scenes/watersheds'
// import Ratingcurves from './scenes/ratingcurves'
// import Geoportal from './scenes/geoportal'
// import News from './scenes/news'
// import Map from './scenes/Map'
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
              <Route path="/invoices" element={<Invoice />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calender" element={<Calender />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} />
              {/* <Route path="/discharge" element={<Discharge />} /> */}
              {/* <Route path="/abstraction" element={<Abstraction />} /> */}
              {/* <Route path="/watershed" element={<Watershed />} /> */}
              {/* <Route path="/ratingcurves" element={<Ratingcurves />} /> */}
              {/* <Route path="/Geoportal" element={<Geoportal />} /> */}
              {/* <Route path="/news" element={<News />} /> */}
              {/* <Route path="/Map" element={<Map />} /> */}
              {/* <Route path="/weather" element={<Weather />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
