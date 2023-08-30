import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../theme'
import ProgressCircle from './ProgressCircle'

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme()
  const solors = tokens(theme.palette.mode)
  return <div>StatBox</div>
}
export default StatBox
