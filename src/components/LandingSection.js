import React from "react"; 
import { Avatar,VStack, HStack} from "@chakra-ui/react"; 
import FullScreenSection from "./FullScreenSection"; 
import myphoto2 from '../images/myphoto2.jpg';
import '../styles/landing.css';
import earth from '../logos/earth.jpg';
import reactlogo from '../logos/react-logo.png';
import chakraui from '../logos/chakraui.png';
import figma from '../logos/figma.png';
 
const greeting = "Aryan Sachdeva"; 

const LandingSection = () => ( 
 <FullScreenSection className="fs-section"> 
   <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
   
  <div id="landing-section" className="landing-layout">
    <VStack pt={20} className="photo-bio">
      <Avatar className="photo" src={myphoto2} alt={"logo"} name="Aryan Sachdeva" w={[180,190,210,220]} h={[180,190,210,220]}></Avatar> 
      <h1 className="name-heading">
        {greeting}
      </h1>
      <p className="name-description">
      CSE-Student | Inquisitive | Resilient | Enthusiastic | TechGeek | Football and F1 Fanatic | 
      </p>
    <HStack className="location">
      <img src={earth} width={23} height={23} alt="earth logo"/>
      <p>Bengaluru,India</p>
      </HStack>
    </VStack> 
     <VStack pt={[10,10,15,20]} className="description-block"> 
       <h1 className="description-heading"> 
         I'm a Frontend Developer,
         <h1>and a UI/UX Designer</h1>
       </h1>
       <p className="description-paragraph">
       As a frontend developer with a focus on React <img src={reactlogo} className="inline-logo"/> and UI/UX design, 
       my journey into coding was ignited by a passion for crafting exceptional web experiences. 
       I specialize in utilizing the Chakra UI <img src={chakraui} className="inline-logo"/> library alongside React and Figma<img src={figma} className="inline-logo"/> for designing the UI/UX, to create dynamic and visually appealing web applications,
       and now I'm constantly seeking opportunities to enhance my expertise and elevate my craft.
       </p>  
     </VStack> 
  </div>

 </FullScreenSection> 


); 
 
export default LandingSection;