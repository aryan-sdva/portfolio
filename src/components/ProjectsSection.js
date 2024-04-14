import React from "react"; 
import FullScreenSection from "./FullScreenSection"; 
import { Box, Heading, SimpleGrid } from "@chakra-ui/react"; 
import Card from "./Card"; 

const projects = [ 
 
 { 
   title: "First application of HTML/CSS", 
   description:
    "This HTML and CSS file marked my early steps in web development. I crafted a basic layout using HTML tags and styled it with CSS, delving into selectors to customize colors, fonts, and layout, igniting my journey into the world of web development.",
   getImageSrc: () => require("../images/epl.jpg"), 
   link:"https://epl-players.vercel.app",
 }, 
 { 
   title: "Cursor Position Tracker", 
   description: 
     "This React component, named CursorTracker, provides real-time tracking of the cursor position within its containing element. It utilizes React's functional component syntax along with the useState hook to manage the cursor position state.",
   getImageSrc: () => require("../images/postrack.png"), 
   link: "https://position-tracker.vercel.app",
 }, 
 { 
  title: "Basic Calculator", 
  description: 
    "Built with React, this basic calculator offers instant arithmetic calculations. Having a user-friendly interface, with support for addition, subtraction, multiplication, and division, it's a handy tool for quick calculations.", 
  getImageSrc: () => require("../images/calc.png"), 
  link: "https://basic-calculator-beta.vercel.app",
}, 
 { 
   title: "Event planner", 
   description: 
     "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps", 
   getImageSrc: () => require("../images/calc.png"), 
   link: "https://www.calculator.net",
 }, 
 { 
  title: "React Space", 
  description: 
    "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️", 
  getImageSrc: () => require("../images/calc.png"), 
  link: "https://www.calculator.net",
}, 
{ 
  title: "React Space", 
  description: 
    "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️", 
  getImageSrc: () => require("../images/calc.png"), 
  link: "https://www.calculator.net",
},
]; 
 
const ProjectsSection = () => { 
 return ( 
   <FullScreenSection  
     p={8} 
     alignItems="flex-start" 
     spacing={8}
   > 
     <Heading as="h1" id="projects-section" color="#bcff1f"> 
       Featured Projects 
     </Heading> 
     <SimpleGrid columns={[1,1,2,3]} spacing={8}> 
       {projects.map((project) => ( 
         <Card 
           key={project.title} 
           title={project.title} 
           description={project.description} 
           url={project.link} 
           imageSrc={project.getImageSrc()} 
         /> 
       ))} 
     </SimpleGrid> 
   </FullScreenSection> 
 ); 
}; 
 
export default ProjectsSection;