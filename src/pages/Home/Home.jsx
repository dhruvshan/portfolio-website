import React  from 'react';
import { Box, Container, Grid, Typography } from "@mui/material";
import { TypeAnimation } from 'react-type-animation';
import myImg from "../../assets/myImg.jpg"
import "./Home.css"
import Work from "../WorkTimline/Work";
import Projects from "../Projects/Projects";


export default function Home(){
    return(
        <Box>
        <Container maxWidth='xl'>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <div className="head-text">
                        <div className="head-image">
                            <img src={myImg} style={{height:500, opacity:'0.6'}}></img>
                        </div>
                        <div className="text-on-image">    
                            
                            <TypeAnimation
                                    sequence={['Hi! I am', 3000, "नमस्ते! मैं हूँ", 3000, 'Salut! Je suis', 3000, 'Hi! I am', 3000]}
                                    speed={20}
                                    deletionSpeed={20}
                                    style={{fontSize: '2em', width:50}}
                            />
                            <Typography variant="h3">Dhruv Shanbhag</Typography> 
                           
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className="head-content">
                        <Typography variant="h5" color={"orange"}> A bit about me</Typography>
                        <br />
                        <Typography>
                            I&apos;m Dhruv, a graduate from Nanyang Technological University&apos; School of Electrical and Electronics Engineering. 
                            I am passionate about programming, with a distinct love for developing software systems and enjoy finance and investments. 
                        </Typography>
                        <br />
                        <Typography>
                        The one thing I want to bring to everyone is my passion to learn, to be mentored and to grow both my personal and professional career.
                        </Typography>
                    </div>
                </Grid>
            </Grid>
            <Box maxWidth="xl" className="my-work">
                <Typography variant="h5">My <span style={{color: "orange"}}> Work Experience</span></Typography>
                <Work></Work>
            </Box>
            <Box maxWidth="xl" className="my-work">
                <Typography variant="h5">My <span style={{color: "orange"}}>Projects</span></Typography>
                <br />
                <Projects />
            </Box>
        </Container>
    </Box>
    )
}