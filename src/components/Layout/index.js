import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Box } from '@mui/system';

const Layout = ({
  contato,
  children,
}) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}>
      <Header {...{ contato }} />
      <Box
        sx={{
          minHeight: "100%",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start"
        }}>
        {children}
      </Box>
      <Footer {...{ contato }} />
    </Box>
  )
}
export default Layout;