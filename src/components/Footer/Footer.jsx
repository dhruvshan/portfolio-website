import React  from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" style={{textDecoration: "none"}} href="">
        DS
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer() {

  return (
    <Box component="footer" sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          <Link color="inherit" style={{textDecoration:"none"}} href="https://www.linkedin.com/in/dhruv-shanbhag/">LinkedIn</Link>
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}


export default Footer;