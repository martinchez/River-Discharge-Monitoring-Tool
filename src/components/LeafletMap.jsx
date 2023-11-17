import React from 'react'
import { tokens } from '../theme'
import { Box, IconButton, useTheme } from '@mui/material'
import { Grid, Card, CardContent, Typography, Icon } from '@mui/material'

import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Slider,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material'

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})
const LeafletMap = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const [open, setOpen] = React.useState(false)
    const [selectedWatershed, setSelectedWatershed] = React.useState(null)

    const handleMarkerClick = (watershed) => {
      setSelectedWatershed(watershed)
      setOpen(true)
    }
  return (
    
        <Grid item xs={12}>
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            style={{ height: '600px', width: '100%' }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {/* Add Marker components for each watershed */}
            <Marker
              position={[51.505, -0.09]}
              onClick={() =>
                handleMarkerClick({
                  name: 'Watershed 1',
                  description: 'Description here',
                })
              }
            >
              <Popup>Unknown 1</Popup>
            </Marker>
            {/* Repeat for other watersheds */}
          </MapContainer>
          <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>{selectedWatershed?.name}</DialogTitle>
            <DialogContent>
              <Typography>{selectedWatershed?.description}</Typography>
            </DialogContent>
          </Dialog>
        </Grid>
  )
}
export default LeafletMap
