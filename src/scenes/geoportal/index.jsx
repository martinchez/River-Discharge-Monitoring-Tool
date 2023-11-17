import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import Header from '../../components/Header'
import { Box, IconButton, useTheme } from '@mui/material'
import { Grid, Card, CardContent, Typography, Icon } from '@mui/material'
import { tokens } from '../../theme'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import  L from 'leaflet'

delete L. Icon. Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl:require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl:require('leaflet/dist/images/marker-icon.png'),
  shadowUrl:require('leaflet/dist/images/marker-shadow.png'),
})

const Geoportal = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box m="30px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Geoportal"
          subtitle="Acess all the collected data here"
        />
      </Box>
      {/* First row */}
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <CardContent>
            <Typography>Filter functionality</Typography>
          </CardContent>
        </Grid>
        <Grid item xs={4}>
          <CardContent>
            <Typography>Map</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Box>
  )
}
export default Geoportal
