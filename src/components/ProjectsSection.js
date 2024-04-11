import React from "react"; 
import FullScreenSection from "./FullScreenSection"; 
import { Box, Heading, SimpleGrid } from "@chakra-ui/react"; 
import Card from "./Card"; 
import background from "../images/background.jpg";

const projects = [ 
 { 
   title: "Basic Calculator", 
   description: 
     "Built with React, this basic calculator offers instant arithmetic calculations. Having a user-friendly interface, with support for addition, subtraction, multiplication, and division, it's a handy tool for quick calculations.", 
   getImageSrc: () => require("../images/calc.jpg"), 
   link: "https://basic-calculator-beta.vercel.app",
 }, 
 { 
   title: "First application of HTML/CSS", 
   description:
    "This HTML and CSS file marked my early steps in web development. I crafted a basic layout using HTML tags and styled it with CSS, delving into selectors to customize colors, fonts, and layout, igniting my journey into the world of web development.",
   getImageSrc: () => require("../images/epl.jpg"), 
   link:"https://epl-players.vercel.app",
 }, 
 { 
   title: "Photo Gallery", 
   description: 
     "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income", 
   getImageSrc: () => require("../images/photo3.jpg"), 
   link: "https://www.calculator.net",
 }, 
 { 
   title: "Event planner", 
   description: 
     "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps", 
   getImageSrc: () => require("../images/photo4.jpg"), 
   link: "https://www.calculator.net",
 }, 
 { 
  title: "React Space", 
  description: 
    "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️", 
  getImageSrc: () => require("../images/photo1.jpg"), 
  link: "https://www.calculator.net",
}, 
{ 
  title: "React Space", 
  description: 
    "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️", 
  getImageSrc: () => require("../images/photo1.jpg"), 
  link: "https://www.calculator.net",
}, 
]; 
 
const ProjectsSection = () => { 
 return ( 
   <FullScreenSection  
     p={8} 
     alignItems="flex-start" 
     spacing={8}
     maxWidth="1350px"
   > 
     <Heading as="h1" id="projects-section"> 
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