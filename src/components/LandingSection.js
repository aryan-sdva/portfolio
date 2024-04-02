import React from "react"; 
import { Avatar, Box, Circle, extendTheme, Heading, VStack } from "@chakra-ui/react"; 
import FullScreenSection from "./FullScreenSection"; 
import myphoto2 from '../images/myphoto2.jpg';
import background from '../images/background.jpg';
 
const greeting = "Hey, I am Aryan Sachdeva"; 
const bio1 = " A UI/UX Designer,"; 
const bio2 = " and A Frontend Developer"; 
const bio3 = "specialized in React"; 

const LandingSection = () => ( 
 <FullScreenSection
   justifyContent="center" 
   alignItems="center" 
 > 
   <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
   <VStack id="landing-section" spacing={5} > 
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
      color="#000066"
      textShadow={"3px 3px 6px lightblue"} 
       fontWeight="extrabold"
       fontFamily="space grotesk"
       fontStyle="normal" 
       as="h4"
       noOfLines={2}> 
         {greeting} 
       </Heading> 
     </VStack> 
     <VStack spacing={3}> 
       <Heading 
       sx={{
        backgroundImage: '-webkit-linear-gradient(#c33764, #1d2671)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: '36px', // Adjust as needed
        fontWeight: 'bold', // Adjust as needed
      }}
       fontFamily={"space grotesk"}
       as="h1" /* size="3xl" */ 
       noOfLines={2}> 
         {bio1} 
       </Heading> 
       <Heading 
       color="#000066"
       fontFamily={"space grotesk"}
       textShadow={"3px 3px 6px lightblue"}
       as="h1" /* size="3xl" */ 
       noOfLines={1}> 
         {bio2} 
       </Heading> 
       <Heading 
       color="#000066"
       fontFamily={"space grotesk"}
       textShadow={"3px 3px 6px lightblue"}
       as="h1" /* size="3xl" */ 
       noOfLines={1}> 
         {bio3} 
       </Heading> 
     </VStack> 
   </VStack> 

 </FullScreenSection> 


); 
 
export default LandingSection;