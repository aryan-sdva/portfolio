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
 {title: "Advanced use of HTML tags", 
  description: 
    "Here, is thsi file, different types of components have been used. Like radio buttons, slider, date input etc. And also embedded iframe codes of YouTube video and Spotify songs are also used.", 
  getImageSrc: () => require("../images/xyz.png"), 
  link: "https://htmltagadvanced.netlify.app", 
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
   title: "Application Prototype(Figma)", 
   description: 
     "Built in Figma, this is a prototype of the UI/UX for a table booking application for  a restaurant. Made using wireframes, interactive components and prototyping for navigation flow  between multiple screens.", 
   getImageSrc: () => require("../images/phone.png"), 
   link: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/9hVSlZiioh4dKesIWD4C1u/Little-Lemon-wireframes?page-id=0%3A1&node-id=1-36&viewport=94%2C214%2C0.32&t=S2MdvgXj6EENxqvv-1&scaling=scale-down&starting-point-node-id=1%3A36"
 }, 
 { 
  title: "Account Setup Page", 
  description: 
    "A normal initial account setup page that could be used for any website setup, made by using basic HTML tags and using the useState hook in React to manage the reseting of the form fields, after submitting the details.", 
  getImageSrc: () => require("../images/account.png"), 
  link: "https://accountloginpage.netlify.app",
}, 
]; 
 
const ProjectsSection = () => { 
 return ( 
   <FullScreenSection  
     p={8} 
     alignItems="flex-start" 
     spacing={8}
     width={["100vw","95vw","90vw","90vw"]}
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