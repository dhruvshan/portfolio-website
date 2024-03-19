import React  from 'react';
import { Container } from "@mui/material";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Gnosis from "../../assets/gnosis.png"
import MediaTek from '../../assets/mediatek.jpg';
import Binance from '../../assets/binance.png';
import Erian from "../../assets/erian.jfif"
import Gamma from "../../assets/gamma.jpg"
import { useState } from "react";
import "./Work.css"

export default function Work(){
  const [showGnosis, setShowGnosis] = useState(false)
  const [showMediaTek, setShowMediaTek] = useState(false)
  const [showBinance, setShowBinance] = useState(false)
  const [showErian, setShowErian] = useState(false)
  const [showGamma, setShowGamma] = useState(false)
 


  function handleGnosisDetails(){
    setShowGnosis(!showGnosis)
  }
  function handleMediatekDetails(){
    setShowMediaTek(!showMediaTek)
  }
  function handleBinanceDetails(){
    setShowBinance(!showBinance)
  }
  function handleErianDetails(){
    setShowErian(!showErian)
  }
  function handleGammaDetails(){
    setShowGamma(!showGamma)
  }
    return (
      <Container maxWidth="xl">
        <VerticalTimeline lineColor="transparent">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'transparent', boxShadow: '0 0 0' }}
            contentArrowStyle={{ borderRight: '0' }}
            date="Jan 2023 - Present"
            iconStyle={{ background: 'transparent', boxShadow: '0 0 0'}}
            icon={<div>
              <img src={Gnosis} style={{width:'100%'}}/>
            </div>}
          >
            <h3 className="vertical-timeline-element-title">Full-stack Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Gnosis Builders</h4>
            <p>
              UI/UX, Product Design, Agile Project Management, React, Node, Express, MongoDB, Python
            </p>
            
            <button className="view-more" onClick={handleGnosisDetails}>{showGnosis ? "Collapse -": "View More +"}</button>
            <div className={showGnosis ? "content-show" : "content-parent"}>
              <ul>
                <li className="left-points">Led an Agile team of 5 to develop and re-launch a token investment and trading 
                application for Gnosis, working on UI/UX design, React frontend development, end-to-end 
                testing and GitHub CI/CD
                </li>
                <li className="left-points">
                Revamped and tested a REST API system using Node.js, Express, Docker, Mocha and Postman, 
                collating over a million datapoints across public blockchain APIs, reducing API response times by 50%
                </li>
                <li className="left-points">
                Designed and implemented a validator data analytics system for sister projects on Gnosis, featuring 
                a MongoDB backend with Python (pandas, numpy) scripts to automate data harvesting from the Dune Blockchain 
                Database, complemented by an HTML, Bootstrap, CSS, and JavaScript web application
                </li>
              </ul>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'transparent', boxShadow: '0 0 0' }}
            contentArrowStyle={{ borderRight: '0' }}
            date="Jan 2022 - May 2022"
            iconStyle={{ background: 'transparent', boxShadow: '0 0 0' }}
            icon={
              <div>
                <img src={MediaTek} style={{width: '150%'}}/>
              </div>
            }
          >
            <h3 className="vertical-timeline-element-title">Full-stack Development Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">MediaTek</h4>
            <p>
              Python, JavaScript, CSS, Drupal, PHP, Linux Shell scripts, MySQL
            </p>
            <button className="view-more" onClick={handleMediatekDetails}>{showMediaTek ? "Collapse -": "View More +"}</button>
            <div className={showMediaTek ? "content-show" : "content-parent"}>
              <ul>
                <li className="left-points">Co-ordinated with Technical Manager to learn, develop, test and scale the company’s
                 internal data application, successfully working with Drupal and Linux MySQL to manage company IP
                </li>
                <li className="left-points">
                Automated a data processing system using Python (pandas, numpy) and SQL to handle data collection and analysis
                 from our MySQL backend, resulting in a 30% reduction in chip verification procedures
                </li>
                <li className="left-points">
                Collected feedback from senior engineers to revamp the Chip Rules section by simplifying pages, editing CSS,
                 and adding JavaScript-based data filtering features, resulting in a 20% reduction in load times
                </li>
              </ul>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'transparent', boxShadow: '0 0 0' }}
            contentArrowStyle={{ borderRight: '0' }}
            date="July 2021 - Dec 2021 "
            iconStyle={{ background: 'transparent', boxShadow: '0 0 0' }}
            icon={
              <div>
                <img src={Binance} style={{width: '100%'}}/>
              </div>
            }
          >
            <h3 className="vertical-timeline-element-title">NFT Platform Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Binance Labs</h4>
            <p>
              QA, Playwright Testing, FastAPI, jQuery, Docker, Documentation, Client Support
            </p>
            <button className="view-more" onClick={handleBinanceDetails}>{showBinance ? "Collapse -": "View More +"}</button>
            <div className={showBinance ? "content-show" : "content-parent"}>
              <ul>
                <li className="left-points">Collaborated with senior developers to develop test plans and perform website 
                testing for the NFT platform using Playwright, effectively identifying and troubleshooting errors for all campaign deployments
                </li>
                <li className="left-points">
                Developed a jQuery, FastAPI and Docker-based User dashboard to analyse transactions, working with the Client team to identify
                 key platform users and increase NFT sales by 20%
                </li>
                <li className="left-points">
                Built up knowledge on Blockchain and NFTs to draft technical documentation, onboard partners and provide technical end-user
                 support for clients, using their feedback to design new platform features
                </li>
              </ul>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'transparent', boxShadow: '0 0 0' }}
            contentArrowStyle={{ borderRight: '0' }}
            date="Jun 2021 - Oct 2021"
            iconStyle={{ background: 'transparent', boxShadow: '0 0 0' }}
            icon={
              <div>
                <img src={Erian} style={{width: '100%'}}/>
              </div>
            }
          >
            <h3 className="vertical-timeline-element-title">Web Development Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Earth Research Institute @ NTU</h4>
            <p>
              React, Node.js, Express, PostgreSQL, UI/UX Design, Python 
            </p>
            <button className="view-more" onClick={handleErianDetails}>{showErian ? "Collapse -": "View More +"}</button>
            <div className={showErian ? "content-show" : "content-parent"}>
              <ul>
                <li className="left-points">
                Learnt React to build a full-stack web application for a warehouse client, showcasing administrative and 
                employee data using Pie charts and Line graphs via D3.js, successfully achieving client requirements
                </li>
                <li className="left-points">
                Researched clients&apos; day-to-day processes, needs and work requirements to effectively model and synthesise
                 data into a Linux PostgreSQL database, streaming data to the frontend via PostgREST APIs
                </li>
                <li className="left-points">
                Worked in a team of 2 to develop an employee safety-distance tracking system using Leaflet.js, combined
                 with real-time alerts to administrators and a Python-based data collection and reporting system
                </li>
              </ul>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'transparent', boxShadow: '0 0 0' }}
            contentArrowStyle={{ borderRight: '0' }}
            date="Oct 2020 - Dec 2020"
            iconStyle={{ background: 'transparent', boxShadow: '0 0 0' }}
            icon={
              <div>
                <img src={Gamma} style={{width: '100%'}}/>
              </div>
            }
          >
            <h3 className="vertical-timeline-element-title">UI/UX Developer and Digital Marketing</h3>
            <h4 className="vertical-timeline-element-subtitle">Gamma Digital</h4>
            <p>
              Strategy, Social Media
            </p>
            <button className="view-more" onClick={handleGammaDetails}>{showGamma ? "Collapse -": "View More +"}</button>
            <div className={showGamma ? "content-show" : "content-parent"}>
              <ul>
                <li className="left-points">Created a custom Wix integration via JS, enabling a review system for client&apos;s customers 
                </li>
                <li className="left-points">
                Analysed competitor platforms and implemented research to effectively address and exceed client 
                targets regarding website leads, sales and overall growth of the client&apos;s e-commerce platform
                </li>
              </ul>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
    )
  }