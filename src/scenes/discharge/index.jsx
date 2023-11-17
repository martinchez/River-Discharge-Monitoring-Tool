import React from 'react'
import { tokens } from '../../theme'
import Line from '../line'
import Header from '../../components/Header'
import LeafletMap from '../../components/LeafletMap'
import { Box, IconButton, useTheme } from '@mui/material'
import { Grid, Card, CardContent, Typography, Icon } from '@mui/material'

import 'leaflet/dist/leaflet.css'
import { MapConatainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})
const Discharge = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box m="30px" style={{ maxHeight: '100vh', overflow: 'hidden' }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Discharge" subtitle="Discharge Monitoring dahsdboards" />
      </Box>
      <Box
        container
        style={{
          marginTop: '20px',
          maxHeight: 'calc(100vh - 60px)',
          overflowY: 'auto',
        }}
      >
        <Grid container spacing={2}>
          {/* Add the filter bars */}
          {/* <Grid item xs={2}>
            <h1>xkclzxkc</h1>
          </Grid> */}
          <Grid item xs={6}>
            <LeafletMap />
          </Grid>
          {/* Add three graphs here making this column capable of scrolling up down. */}
          <Grid item xs={6}>
            <Box style={{ height: '600px', overflowY: 'auto' }}>
              <Line />
              <Line />
              <Line />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
export default Discharge
