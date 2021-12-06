import { ArrowForward, ArrowRight } from '@mui/icons-material';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Diretorias = () => {


  return (
    <Box>
      <Button
        endIcon={
          <ArrowForward />
        }
        variant="contained"
        color="primary">
          Leia mais
        </Button>
      <Button
        endIcon={
          <ArrowForward />
        }
        variant="outlined"
        color="dark">
          Leia mais
        </Button>
      <Button
        variant="contained"
        color="secondary">
          Lei
        </Button>
    </Box>
  )
}


export default Diretorias
