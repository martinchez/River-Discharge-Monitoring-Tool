import { Box } from '@mui/material'
import Header from '../../components/Header'
import GeographyChart from '../../components/GeographyChart'
import { tokens } from '../../theme'
import { useTheme } from '@mui/material'

const Geography = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box m="20px">
      <Header title="Gegraphical location" subtitle= "Geography chart" />
      <Box height="75vh" borderRadius="4px" border={`1px solid ${colors.grey[100]}`}>
        <GeographyChart />
      </Box>
    </Box>
  )
}
export default Geography
