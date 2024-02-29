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
      style={{width : '30%' ,height :'30%'}}
      >
     </Avatar>
       <Heading 
      height="50px"
      color="#faa300"
      textShadow={"5px 3px 8px #114232"} 
       fontWeight="extrabold"
       fontFamily="space grotesk"
       fontStyle="normal" 
       as="h4" size={"2xl"} 
       noOfLines={2}> 
         {greeting} 
       </Heading> 
     </VStack> 
     <VStack spacing={6}> 
       <Heading 
       color="#f7f6bb"
       fontFamily={"space grotesk"}
       textShadow={"5px 3px 8px #114232"} 
       as="h1" size="3xl" 
       noOfLines={1}> 
         {bio1} 
       </Heading> 
       <Heading 
       color="#f7f6bb"
       fontFamily={"space grotesk"}
       textShadow={"5px 3px 8px #114232"}
       as="h1" size="3xl" 
       noOfLines={1}> 
         {bio2} 
       </Heading> 
     </VStack> 
   </VStack> 

 </FullScreenSection> 


); 
 
export default LandingSection;