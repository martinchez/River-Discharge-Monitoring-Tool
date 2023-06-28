import { Box, Icon, IconButton, useTheme } from '@mui/material'
import { useContext } from 'react'
import { colorModeContext, tokens } from '../../theme'
import InputBase from '@mui/material'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SearchIcon from '@mui/icons-material/SearchIcon'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const Topbar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(colorModeContext)

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* search bar */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        
      </Box>
      <IconButton sx={{ display: 'flex' }}></IconButton>
    </Box>
  )
}
export default Topbar
