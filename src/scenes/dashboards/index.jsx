import { Box } from '@mui/material'
// import Header1 from '../../components/Header1'
import Header from '../../components/Header'
// import Header

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your Dashboard" />
      </Box>
    </Box>
  )
}
export default Dashboard
