import React from "react"; 
import { Avatar, Box, Circle, extendTheme, Heading, VStack, HStack} from "@chakra-ui/react"; 
import FullScreenSection from "./FullScreenSection"; 
import myphoto2 from '../images/myphoto2.jpg';
import '../styles/landing.css';
 
const greeting = "Aryan Sachdeva"; 
const bio2 = "I'm a Frontend Developer, and a UI/UX Designer"; 

const LandingSection = () => ( 
 <FullScreenSection className="fs-section"> 
   <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
   
  <HStack id="landing-section" className="landing-layout" spacing={40}>
    <VStack pt={20} alignItems="center">
      <Avatar className="photo" src={myphoto2} alt={"logo"} name="Aryan Sachdeva" w={[180,220]} h={[180,220]}></Avatar> 
      <h1 className="name-heading">
        {greeting}
      </h1>
      <p className="name-description">
        A student currently pursuing a degree in computer science.
        Always thriving on learning new skills and honing them to create a difference in the industry. 
      </p>
    </VStack> 
     <VStack spacing={5}> 
       <h1 className="description-heading"> 
         {bio2} 
       </h1>
       <p className="description-paragraph">
        Being a frontend developer specializing in React and UI/UX design, 
        My journey into coding started with a fascination for creating awesome web experiences,
        and now I'm all about bringing ideas to life. From crafting dynamic web apps to polishing up user interfaces,
        I'm here to blend creativity with code. Let's team up and turn ideas into reality!
       </p>  
     </VStack> 
  </HStack>

 </FullScreenSection> 


); 
 
export default LandingSection;