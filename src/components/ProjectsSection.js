import React from "react"; 
import FullScreenSection from "./FullScreenSection"; 
import { Box, Heading, SimpleGrid } from "@chakra-ui/react"; 
import Card from "./Card"; 
import background from "../images/background.jpg";
const projects = [ 
 { 
   title: "React Space", 
   description: 
     "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️", 
   getImageSrc: () => require("../images/photo1.jpg"), 
 }, 
 { 
   title: "React Infinite Scroll", 
   description: 
     "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️", 
   getImageSrc: () => require("../images/photo2.jpg"), 
 }, 
 { 
   title: "Photo Gallery", 
   description: 
     "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income", 
   getImageSrc: () => require("../images/photo3.jpg"), 
 }, 
 { 
   title: "Event planner", 
   description: 
     "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps", 
   getImageSrc: () => require("../images/photo4.jpg"), 
 }, 
 { 
  title: "React Space", 
  description: 
    "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️", 
  getImageSrc: () => require("../images/photo1.jpg"), 
}, 
{ 
  title: "React Space", 
  description: 
    "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️", 
  getImageSrc: () => require("../images/photo1.jpg"), 
}, 
]; 
 
const ProjectsSection = () => { 
 return ( 
   <FullScreenSection  
     p={8} 
     alignItems="flex-start" 
     spacing={8}
   > 
     <Heading as="h1" id="projects-section"> 
       Featured Projects 
     </Heading> 
     <SimpleGrid columns={[1,1,2,3]} spacing={5}> 
       {projects.map((project) => ( 
         <Card 
           key={project.title} 
           title={project.title} 
           description={project.description} 
           url="https://github.com/rgommezz/react-native-offline" 
           imageSrc={project.getImageSrc()} 
         /> 
       ))} 
     </SimpleGrid> 
   </FullScreenSection> 
 ); 
}; 
 
export default ProjectsSection;