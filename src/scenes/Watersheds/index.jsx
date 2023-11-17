import React from 'react'
// import WatershedXtics from '../../components'
import Header from '../../components/Header'
import { useState, useEffect } from 'react'
import { tokens } from '../../theme'
import { Button, DatePicker } from '@mui/material'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Box,
  Grid,
  IconButton,
  useTheme,
  Slider,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material'
import { Link } from 'react-router-dom'
// leaflet
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts'
import L from 'leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})

const WaterSheds = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [open, setOpen] = React.useState(false)
  const [selectedWatershed, setSelectedWatershed] = React.useState(null)

  const handleMarkerClick = (watershed) => {
    setSelectedWatershed(watershed)
    setOpen(true)
  }

  // adding states and functions for handling the filters here
  const [locationFilter, setLocationFilter] = React.useState('')
  const [sizeFilter, setSizeFilter] = React.useState([0, 100])
  const [streamFilter, setStreamFilter] = React.useState([0, 10])
  const [dischargeFilter, setDischargeFilter] = React.useState([0, 1000])
  const [populationDensityFilter, setPopulationDensityFilter] = React.useState([
    0, 1000,
  ])
  const [selectedWatershedId, setSelectedWatershedId] = React.useState('')
  const [selectedDate, setSelectedDate] = React.useState(null)

  const applyFilters = () => {
    // fil;ter logic;
    // For example, filter the markers to be displayed based on the state values
  }
  const clearFilters = () => {
    setLocationFilter('')
    setSizeFilter([0, 100])
    setStreamFilter([0, 10])
    setDischargeFilter([0, 1000])
    setPopulationDensityFilter([0, 1000])
    setSelectedWatershedId('')
    setSelectedDate(null)
  }

  React.useEffect(() => {
    applyFilters()
  }, [
    locationFilter,
    sizeFilter,
    streamFilter,
    dischargeFilter,
    populationDensityFilter,
    selectedWatershedId,
  ])
  return (
    <Box m="30px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Watersheds"
          subtitle="Here are the Delienated watersheds."
        />
      </Box>
      <Box container style={{ marginTop: '20px' }}>
        <Grid container spacing={12}>
          <Grid item xs={3} style={{ backgroundColor: '' }}>
            <Typography variant="h6">Filters</Typography>
            <FormControl fullWidth margin="normal">
              <InputLabel id="watershed-select-label">Watershed</InputLabel>
              <Select
                labelId="watershed-select-label"
                value={selectedWatershedId}
                label="Watershed"
                onChange={(e) => setSelectedWatershedId(e.target.value)}
              >
                <MenuItem value="">
                  <em>Muringato</em>
                </MenuItem>
                <MenuItem value="">
                  <em>Amboni</em>
                </MenuItem>
                <MenuItem value="">
                  <em>Tana</em>
                </MenuItem>
                <MenuItem value="">
                  <em>Kabatini</em>
                </MenuItem>
                <MenuItem value="">
                  <em>Turkwel</em>
                </MenuItem>
                {/* {watersheds.map((watershed) => (
                  <MenuItem key={watershed.id} value={watershed.id}>
                    {watershed.name}
                  </MenuItem>
                ))} */}
              </Select>
            </FormControl>
            <TextField
              label="Watershed Location"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              fullWidth
              margin="normal"
            />
            <Typography gutterBottom>Basin Size (m2)</Typography>
            <Slider
              value={sizeFilter}
              onChange={(_, newValue) => setSizeFilter(newValue)}
              valueLabelDisplay="auto"
              min={0}
              max={100}
            />
            <Typography gutterBottom>Number of Streams</Typography>
            <Slider
              value={streamFilter}
              onChange={(_, newValue) => setStreamFilter(newValue)}
              valueLabelDisplay="auto"
              min={0}
              max={10}
            />
            <Typography gutterBottom>Discharge Capacity</Typography>
            <Slider
              value={dischargeFilter}
              onChange={(_, newValue) => setDischargeFilter(newValue)}
              valueLabelDisplay="auto"
              min={0}
              max={1000}
            />
            <Typography gutterBottom>Population Density</Typography>
            <Slider
              value={populationDensityFilter}
              onChange={(_, newValue) => setPopulationDensityFilter(newValue)}
              valueLabelDisplay="auto"
              min={0}
              max={1000}
            />

            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Date"
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
                renderInput={(params) => (
                  <TextField {...params} fullWidth margin="normal" />
                )}
              />
            </LocalizationProvider> */}

            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: '10px' }}
              onClick={applyFilters}
            >
              Apply Filters
            </Button>

            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              style={{ marginTop: '10px' }}
              onClick={clearFilters}
            >
              Clear Filters
            </Button>
          </Grid>
          <Grid item xs={9}>
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
        </Grid>
      </Box>
    </Box>
  )
}
export default WaterSheds
