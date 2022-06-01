import { Box, Button, CardMedia, Typography } from '@mui/material';
import React from 'react';

const DeprecatedBanner = () => {

  return (
    <Box height="auto" maxHeight="400px" width="100%" sx={{
      position: "relative"
    }}>
      <CardMedia
        component="img"
        src="/images/banner-aben.png"
        sx={{
          height: "400px",
          objectFit: "cover",
          objectPosition: "left center"
        }}>
      </CardMedia>
      <Box sx={{
        position: "absolute",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        top: 0
      }}>
        <Typography variant="h4" color="common.white">Oi! Sou a ABEn-RS.</Typography>
        <Button
          onClick={handleAssocieseClick}
          sx={{
            boxShadow: "5px 10px 20px rgba(0, 0, 0, 0.1)",
            mt: 2,
            color: "black",
            backgroundColor: "#E8C061",
            "&:hover": {
              boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#FAD273",
            }
          }}
          variant="contained"
          size="large"
        >Associe-se</Button>
      </Box>
    </Box>
  )
}

export default DeprecatedBanner;
