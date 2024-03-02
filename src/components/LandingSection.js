import React from "react"; 
import { Avatar, Box, Circle, extendTheme, Heading, VStack } from "@chakra-ui/react"; 
import FullScreenSection from "./FullScreenSection"; 
import myphoto from '../images/myphoto.jpg';
import newphoto from '../images/newphoto.jpg';
import background from '../images/background.jpg';
 
const greeting = "Hey, I am Aryan Sachdeva"; 
const bio1 = "A frontend developer"; 
const bio2 = "specialized in React"; 

const LandingSection = () => ( 
 <FullScreenSection
   justifyContent="center" 
   alignItems="center" 
 > 
   <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
   <VStack spacing={5} > 
     <VStack spacing={4} alignItems="center"> 
     <Avatar
      src={myphoto} 
      alt={"logo"} 
      name="Aryan Sachdeva" 
      width={"40%"}
      height={"40%"}
      >
     </Avatar>
     <Heading 
      height="50px"
      color="black"
      textShadow={"5px 3px 4px lightblue"} 
       fontWeight="extrabold"
       fontFamily="space grotesk"
       fontStyle="normal" 
       as="h4"
       noOfLines={2}> 
         {greeting} 
       </Heading> 
     </VStack> 
     <VStack spacing={1}> 
       <Heading 
       color="black"
       fontFamily={"space grotesk"}
       textShadow={"5px 3px 4px lightblue"} 
       as="h1" /* size="3xl" */ 
       noOfLines={2}> 
         {bio1} 
       </Heading> 
       <Heading 
       color="black"
       fontFamily={"space grotesk"}
       textShadow={"5px 3px 4px lightblue"}
       as="h1" /* size="3xl" */ 
       noOfLines={1}> 
         {bio2} 
       </Heading> 
     </VStack> 
   </VStack> 

 </FullScreenSection> 


); 
 
export default LandingSection;