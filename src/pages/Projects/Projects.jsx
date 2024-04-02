import React  from 'react';
import { Box, Grid, Link, Typography } from "@mui/material";

export default function Projects(){
    return(
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
                <Grid container item xs={12} md={4} className="project-grid" spacing={3} direction="column">
                        <Grid item>
                            <Typography variant="h6">
                                Personal Carbon Footprint Application
                            </Typography>   
                            <Typography> Final Year Project - Grade: A</Typography>
                        </Grid>
                        <Grid item >
                            <Typography>
                                For my NTU EEE final year project, I developed a carbon footprint tracking app to promote sustainability. Users track their carbon footprint in categories like Food, Travel, Recycling, and Energy using the Climatiq API and internal calculations. 
                                The app calculates a daily score and compares it to set goals. Users interact with a virtual Endangered Animal Pet, impacted by their carbon score. 
                            </Typography>
                            <br />
                            <Typography>
                                Built securely with Flutter and Cloud Firestore, the app prioritizes user privacy, access and ease of user. The goal is to inspire sustainable behavior change.
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography color={"orange"}>
                            Skills:
                            </Typography>
                            Flutter, Firebase, Figma, Debugging
                        </Grid>
                        <Grid item>
                            <Typography color={"orange"}>Link:</Typography>
                            <Link rel="noopener noreferrer"  href="https://github.com/dhruvshan/carbonfootprintapp"  target="_blank">FYP GitHub</Link>
                        </Grid>
                        
                    
                </Grid>
                <Grid container item xs={12} md={4}className="project-grid" spacing={3} direction="column">
                    <Grid item>
                        <Typography variant="h6">
                            Project VeriFi
                        </Typography>
                        <Typography>Crypto.com 2022 Hackathon - 4th Place</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>
                            At the Crypto.com 2022 NextGen Hackathon, my team of 4 students developed a blockchain-based document sharing and verification platform. 
                            Our goal was to create a secure application for certificate requests, sharing, and identity verification. 
                        </Typography>
                        <br />
                        <Typography>
                            Selected as one of the top 5 teams out of 32, 
                            we presented our project to crypto.com experts and business leaders, ultimately placing 4th. As my first Hackathon experience, I was proud of our team&apos;s achievement.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography color={"orange"}>Skills:</Typography>
                        Figma, HTML, CSS, JavaScript, Polygon Network API
                    </Grid>
                    <Grid item>
                        <Typography color={"orange"}>Link:</Typography>
                        <Link rel="noopener noreferrer"  href="https://github.com/zhenyong25/crypto.com-hackathon-2022"  target="_blank">VeriFi GitHub</Link>
                    </Grid>
                    
                </Grid>
                <Grid container item xs={12} md={4} className="project-grid" spacing={3} direction="column">
                    <Grid item>
                        <Typography variant="h6">
                            CarbonFoodprint
                        </Typography>
                        <Typography>Personal Project - Deployed</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>
                            While working on my FYP and surveying my colleagues to improve my Android FYP Application,
                            we realised that one aspect we could improve is provide users with a way to select common food types and calculate the 
                            carbon footprint, instead of relying on deciding how much they spent on meat, fish and vegetables.
                        </Typography>
                        <br />
                        <Typography>
                            Unfortunately, there was no public API, or database which contained the types of food (especially asian food) and their 
                            corresponding footprint. So I decided to build one myself. Project has been deployed on vercel and the food database is being updated regularly!
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography color={"orange"}>Skills:</Typography>
                        React, Node.js, Express, MongoDB, Docker, Cypress
                    </Grid>
                    <Grid item>
                        <Typography color={"orange"}>Link:</Typography>
                        <Link rel="noopener noreferrer"  href="https://carbonfoodprint.vercel.app/"  target="_blank">CarbonFoodprint App</Link>
                    </Grid>
                    
                </Grid>
            </Grid>
        </Box>
    )
}