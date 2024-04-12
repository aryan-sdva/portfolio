import React from "react"; 
import { Avatar, Box, Circle, extendTheme, Heading, VStack, HStack, Flex} from "@chakra-ui/react"; 
import FullScreenSection from "./FullScreenSection"; 
import myphoto2 from '../images/myphoto2.jpg';
import '../styles/landing.css';
 
const greeting = "Aryan Sachdeva"; 

const LandingSection = () => ( 
 <FullScreenSection className="fs-section"> 
   <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
   
  <div id="landing-section" className="landing-layout">
    <VStack pt={20} pr={30} className="photo-bio">
      <Avatar className="photo" src={myphoto2} alt={"logo"} name="Aryan Sachdeva" w={[180,220]} h={[180,220]}></Avatar> 
      <h1 className="name-heading">
        {greeting}
      </h1>
      <p className="name-description">
      CSE-Student | Tech Geek | Inquisitive | Enthusiastic | Resilient | Football and F1 Fanatic | 
      </p>
      <p>🌏 Bengaluru,India</p>
    </VStack> 
     <VStack pt={[10,10,15,20]} ml={[0,0,0,20]}> 
       <h1 className="description-heading"> 
         I'm a Frontend Developer,
         <h1>and a UI/UX Designer</h1>
       </h1>
       <p className="description-paragraph">
        Being a frontend developer specializing in React and UI/UX design, 
        my journey into coding started with a fascination for creating awesome web experiences,
        and now I'm all about bringing ideas to life. From crafting dynamic web apps to polishing up user interfaces,
        I'm here to blend creativity with code. Let's team up and turn ideas into reality!
       </p>  
     </VStack> 
  </div>

 </FullScreenSection> 


); 
 
export default LandingSection;