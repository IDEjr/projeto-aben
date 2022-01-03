import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import classes from './Partner.module.css'

export default function Partner ({title, imageUrl}) {
  return (
    <Box
      
      sx={{backgroundImage: `url(${imageUrl})`,
      justifyItems:'center',
      alignItems: 'center',
      height: '80px',
      width: '192px',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      backgroundSize: 'contain',
      borderRadius: '2px'
    }}
    >
      <Typography>
        {title}
      </Typography>
    </Box>
  )
}

Partner.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
};
