import React from "react"; 
import { Avatar, Box, extendTheme, Heading, VStack } from "@chakra-ui/react"; 
import FullScreenSection from "./FullScreenSection"; 
import myphoto from '../images/myphoto.jpg';
import background from '../images/background.jpg';
 
const greeting = "Hey, I am Aryan Sachdeva"; 
const bio1 = "A frontend developer"; 
const bio2 = "specialized in React"; 

const LandingSection = () => ( 
 <FullScreenSection
   justifyContent="center" 
   alignItems="center" 
 > 
   <VStack spacing={16}> 
     <VStack spacing={4} alignItems="center"> 
     <Avatar
      src={myphoto}
      alt={"logo"}
      size="2xl"
      style={{width : '200px' ,height :'200px'}}
      >
     </Avatar>
       <Heading 
      height="50px"
      color="#0B1354" 
       fontWeight="extrabold"
       fontFamily="inherit"
       fontStyle="normal" 
       as="h4" size="2xl" 
       noOfLines={2}> 
         {greeting} 
       </Heading> 
     </VStack> 
     <VStack spacing={6}> 
       <Heading 
       color="yellow"
       as="h1" size="3xl" 
       noOfLines={1}> 
         {bio1} 
       </Heading> 
       <Heading 
       color="yellow"
       as="h1" size="3xl" 
       noOfLines={1}> 
         {bio2} 
       </Heading> 
     </VStack> 
   </VStack> 

 </FullScreenSection> 


); 
 
export default LandingSection;