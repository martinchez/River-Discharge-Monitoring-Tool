import { Box, useTheme } from '@mui/material'
import Header from '../../components/Header'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { tokens } from '../../theme'

const FAQ = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box m="20px">
      <Header
        title="FAQ"
        subtitle=" Frequently Asked Questions Page about water abstraction"
      />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            An important Question Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Cum ex minima voluptatum ullam eaque doloribus
            deleniti minus dolore et, corporis, error sequi, facere id
            cupiditate impedit labore! Veniam, et cupiditate!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            An important Question Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Cum ex minima voluptatum ullam eaque doloribus
            deleniti minus dolore et, corporis, error sequi, facere id
            cupiditate impedit labore! Veniam, et cupiditate!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is a watershed?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            An important Question Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Cum ex minima voluptatum ullam eaque doloribus
            deleniti minus dolore et, corporis, error sequi, facere id
            cupiditate impedit labore! Veniam, et cupiditate!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            An important Question Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Cum ex minima voluptatum ullam eaque doloribus
            deleniti minus dolore et, corporis, error sequi, facere id
            cupiditate impedit labore! Veniam, et cupiditate!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            An important Question Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Cum ex minima voluptatum ullam eaque doloribus
            deleniti minus dolore et, corporis, error sequi, facere id
            cupiditate impedit labore! Veniam, et cupiditate!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            An important Question Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Cum ex minima voluptatum ullam eaque doloribus
            deleniti minus dolore et, corporis, error sequi, facere id
            cupiditate impedit labore! Veniam, et cupiditate!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default FAQ
