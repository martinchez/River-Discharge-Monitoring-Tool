import React from 'react'
import Header from '../../components/Header'
import { tokens } from '../../theme'
import LeafletMap from '../../components/LeafletMap'
import { Box, Typograohy, useTheme, Grid, IconButton } from '@mui/material'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))
const Abstractions = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box m="30px" style={{ maxHeight: '100vh', overflow: 'hidden' }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Abstractions"
          subtitle="Analytics on the Abstraction instances"
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
        <Grid container Spacing={1}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 3, md: 3 }}
            xs={3}
          >
            <Grid item xs={6}>
              <Item>1</Item>
            </Grid>
            <Grid item xs={6}>
              <Item>2</Item>
            </Grid>
            <Grid item xs={6}>
              <Item>3</Item>
            </Grid>
            <Grid item xs={6}>
              <Item>4</Item>
            </Grid>
          </Grid>
          <Grid item xs={9}>
            <LeafletMap />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
export default Abstractions
