import { Formik } from 'formik'
import * as yup from 'yup'
import useMediaQuery from '@mui/material/useMediaQuery'
import Header from '../../components/Header'
import React, { useState } from 'react'
import LeafletMap from '../../components/LeafletMap'
import { useFormik } from 'formik'
import {
  Box,
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material'

const Abstractors = () => {
  const [selectingPoint, setSelectingPoint] = useState(false)
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null })

  const validationSchema = yup.object({
    // Add your validation rules here
    // Example:
    // firstName: yup.string('Enter your first name').required('First name is required'),
  })

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      hydrologicalUnit: '',
      county: '',
      country: '',
      AbtractionType: '',
      coordinates: { lat: null, lng: null }, // You can also store coordinates in the formik state if you want
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const formData = {
        ...values,
        coordinates,
      }

      // Here, you can send `formData` to your database
      console.log('Form Data for Submission:', formData)
    },
  })

  const handleMapClick = (lat, lng) => {
    setCoordinates({ lat, lng })
    setSelectingPoint(false)
  }

  const handleSelectPointClick = () => {
    setSelectingPoint(true)
  }

  const downloadFormData = () => {
    const dataStr =
      'data:text/json;charset=utf-8,' +
      encodeURIComponent(JSON.stringify(formik.values))
    const dlAnchorElem = document.createElement('a')
    dlAnchorElem.setAttribute('href', dataStr)
    dlAnchorElem.setAttribute('download', 'form-data.json')
    dlAnchorElem.click()
  }

  return (
    <Box m="30px" style={{ maxHeight: '100vh', overflow: 'hidden' }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Registration Form"
          subtitle="Do you want to be a legal Abstractor register bellow"
        />
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
          <Grid item xs={6}>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                label="Name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Phone Number"
                name="phoneNumber"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Email Address"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                fullWidth
                margin="normal"
              />

              <FormControl fullWidth margin="normal">
                <InputLabel>Hydrological Unit</InputLabel>
                <Select
                  name="hydrologicalUnit"
                  value={formik.values.hydrologicalUnit}
                  onChange={formik.handleChange}
                >
                  {/* Add your options here */}
                  <MenuItem value="12">Lower Zone</MenuItem>
                  <MenuItem value="Middle Zone">Middle Zone</MenuItem>
                  <MenuItem value="Upper Zone">Upper Zone</MenuItem>
                  {/* ... */}
                </Select>
              </FormControl>

              <TextField
                label="County"
                name="county"
                value={formik.values.county}
                onChange={formik.handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Country"
                name="country"
                value={formik.values.country}
                onChange={formik.handleChange}
                fullWidth
                margin="normal"
              />

              <FormControl fullWidth margin="normal">
                <InputLabel>Abstraction Type</InputLabel>
                <Select
                  name="AbstractionType"
                  value={formik.values.subtractionType}
                  onChange={formik.handleChange}
                >
                  {/* Add your options here */}
                  <MenuItem value="Lower Zone">Lower Zone</MenuItem>
                  <MenuItem value="Middle Zone">Middle Zone</MenuItem>
                  <MenuItem value="Upper Zone">Upper Zone</MenuItem>
                  {/* ... */}
                </Select>
              </FormControl>

              <Button
                color="secondary"
                type="submit"
                variant="contained"
                style={{ marginTop: '20px' }}
              >
                Register
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleSelectPointClick}
                style={{ marginLeft: '10px', marginTop: '20px' }}
              >
                Select Location
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={downloadFormData}
                style={{ marginLeft: '10px', marginTop: '20px' }}
              >
                Download Form Data
              </Button>
            </form>
          </Grid>
          <Grid item xs={6}>
            <LeafletMap
              onSelectPoint={handleMapClick}
              selectingPoint={selectingPoint}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
export default Abstractors
