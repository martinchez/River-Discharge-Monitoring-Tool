import React from 'react'
// import { Box } from '@mui/material'
import Header from '../../components/Header'
import Newscard from '../../components/Newscard'
import { Grid, Card, CardContent, Typography, Icon } from '@mui/material'
import { Code, Ticket, Database, People } from '@mui/icons-material'
import { useState } from 'react'
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar'
import { Box, IconButton, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import 'react-pro-sidebar/dist/css/styles.css'
import { tokens } from '../../theme'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined'
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'
import AppsIcon from '@mui/icons-material/Apps'
import StorageIcon from '@mui/icons-material/Storage'
import WaterIcon from '@mui/icons-material/Water'
import SsidChartIcon from '@mui/icons-material/SsidChart'
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber'
import WaterDropIcon from '@mui/icons-material/WaterDrop'
import './dashboard.css'
// leaflet
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts'
import L from 'leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'

// api documentation for the paid Leaflet; https://docs.stadiamaps.com/tutorials/getting-started-with-react-leaflet/
delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})

const Dashboard = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const newsData = [
    {
      image:
        'http://fis.freshwatertools.eu/files/MARS_resources/Info_lib/pressure/pressure_images/P_abstraction_irrigation-ditch-spain_hervas_123rf_56488343_xxl.jpg',
      title: 'Irrigation ditch in Spain',
      description: 'lorem ipsum dolor sit am',
      link: 'www.anmart.co.ke',
    },
    {
      image:
        'http://fis.freshwatertools.eu/files/MARS_resources/Info_lib/pressure/pressure_images/P_abstraction_irrigation-ditch-spain_hervas_123rf_56488343_xxl.jpg',
      title: 'Irrigation ditch in Spain',
      description: 'lorem ipsum dolor sit am',
      link: 'www.anmart.co.ke',
    },
    {
      image:
        'http://fis.freshwatertools.eu/files/MARS_resources/Info_lib/pressure/pressure_images/P_abstraction_irrigation-ditch-spain_hervas_123rf_56488343_xxl.jpg',
      title: 'Irrigation ditch in Spain',
      description: 'lorem ipsum dolor sit am',
      link: 'www.anmart.co.ke',
    },
    {
      image:
        'http://fis.freshwatertools.eu/files/MARS_resources/Info_lib/pressure/pressure_images/P_abstraction_irrigation-ditch-spain_hervas_123rf_56488343_xxl.jpg',
      title: 'Irrigation ditch in Spain',
      description: 'lorem ipsum dolor sit am',
      link: 'www.anmart.co.ke',
    },
    {
      image:
        'http://fis.freshwatertools.eu/files/MARS_resources/Info_lib/pressure/pressure_images/P_abstraction_irrigation-ditch-spain_hervas_123rf_56488343_xxl.jpg',
      title: 'Irrigation ditch in Spain',
      description: 'lorem ipsum dolor sit am',
      link: 'www.anmart.co.ke',
    },
    {
      image:
        'http://fis.freshwatertools.eu/files/MARS_resources/Info_lib/pressure/pressure_images/P_abstraction_irrigation-ditch-spain_hervas_123rf_56488343_xxl.jpg',
      title: 'Irrigation ditch in Spain',
      description: 'lorem ipsum dolor sit am',
      link: 'www.anmart.co.ke',
    },
  ]
  return (
    <Box m="30px">
      {/* page header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your Dashboard" />
      </Box>
      {/* first row */}
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Card variant="outlined" style={{ backgroundColor: 'grey' }}>
            <CardContent>
              <Icon>
                <Code color={colors.greenAccent[400]} />
              </Icon>
              <Typography variant="h2" fontWeight="bold" component="div">
                12
              </Typography>
              <Typography>Deployments</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card
            variant="outlined"
            style={{ backgroundColor: colors.redAccent[500] }}
          >
            <CardContent>
              <Icon>
                <ConfirmationNumberIcon color={colors.greenAccent[100]} />
              </Icon>
              <Typography variant="h2" fontWeight="bold" component="div">
                599
              </Typography>
              <Typography>Discharge</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card
            variant="outlined"
            style={{ backgroundColor: colors.blueAccent[500] }}
          >
            <CardContent>
              <Icon>
                <WaterDropIcon color={colors.greenAccent[100]} />
              </Icon>
              <Typography variant="h2" fontWeight="bold" component="div">
                120
              </Typography>
              <Typography>Abstractors</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card
            variant="outlined"
            style={{ backgroundColor: colors.greenAccent[500] }}
          >
            <CardContent>
              <Icon>
                <People color={colors.greenAccent[100]} />
              </Icon>
              <Typography variant="h2" fontWeight="bold" component="div">
                6875
              </Typography>
              <Typography>Users</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      {/* second row */}
      <Grid container style={{ marginTop: '20px' }}>
        {/* Map column */}
        <Grid item xs={12}>
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            style={{ height: '500px', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>A sample popup.</Popup>
            </Marker>
          </MapContainer>
        </Grid>
      </Grid>
      <Grid>
        {/* News column*/}
        {/* <Box xs={12}>
          <Typography variant="h4" mb={3}>
            News
          </Typography>
          <Grid container spacing={3}>
            {newsData.map((news, index) => (
              <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
                <Newscard {...news} />
              </Grid>
            ))}
          </Grid>
        </Box> */}
      </Grid>
    </Box>
  )
}
export default Dashboard
