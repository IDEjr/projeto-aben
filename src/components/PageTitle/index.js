import { Container, Typography, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'

export default function PageTitle({ title }) {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));

  if (isMobile) return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: "77px",
        backgroundColor: "primary.main",
      }}>
      <Container>
        <Typography
          variant="h2"
          color="primary.contrastText">
          {title}
        </Typography>
      </Container>
    </Box>
  )

  return null
}
