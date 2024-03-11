import React from "react"; 
import { Avatar, Box, Circle, extendTheme, Heading, VStack } from "@chakra-ui/react"; 
import FullScreenSection from "./FullScreenSection"; 
import myphoto2 from '../images/myphoto2.jpg';
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
      src={myphoto2} 
      alt={"logo"} 
      name="Aryan Sachdeva" 
      zIndex={50}
      borderWidth={5}
      borderColor={"whitesmoke"}
      boxShadow={" 0px -25px 20px -20px rgba(0,0,0,0.7),25px 0px 20px -20px rgba(0,0,0,0.7),0px 25px 20px -20px rgba(0,0,0,1),-25px 0px 20px -20px rgba(0,0,0,0.7)"}
      //width={["45%","30%","25%","25%"]}
      //height={["45%","30%","25%","25%"]}
      width={[180,200]} height={[180,200]}
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