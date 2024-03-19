// import { useState } from 'react'
import React  from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Container, Link } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import { useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
import Footer from './components/Footer/Footer';

function App() {
  // const navigate = useNavigate();
  // const [toggleDarkMode, setToggleDarkMode] = useState(true);

  // function to toggle the dark mode as true or false
  // const toggleDarkTheme = () => {
  //   setToggleDarkMode(!toggleDarkMode);
  // };

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      // background:{
      //   default: "#012d21",
      // },// handle the dark mode state on toggle
      primary: {
        main: '#A4BE7B',
      },
      secondary: {
        main: '#e0e8e2',

      },
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" className='navbar' style={{background:"none", border:0}}>
            <Container maxWidth="xl">
              <Toolbar>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                  <Link href="/" underline='none' sx={{color: "inherit"}}>DS</Link>
                </Typography>
                { (
                  <div>
                    {/* <Switch checked={toggleDarkMode} onChange={toggleDarkTheme} /> */}
                  </div>
                )}
              </Toolbar>
            </Container>
          </AppBar>
        </Box>
        <div id="detail">
          <Outlet />
        </div>
        <Footer></Footer>
      </ThemeProvider>
    </>
  )
}

export default App
