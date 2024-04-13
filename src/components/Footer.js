import React from "react"; 
import {Flex, Grid, HStack} from "@chakra-ui/react";
import twitter from '../logos/twitter.png';
import gmail from '../logos/gmail.png';
import github from '../logos/github.png';
import linkedin from '../logos/linkedin.png';
import instagram from '../logos/instagram.png';

const socials = [ 
  { 
    icon: gmail, 
    url: "mailto: sachdevaaryan00@gmail.com", 
  }, 
  { 
    icon: github, 
    url: "https://www.github.com/aryan-sdva", 
  }, 
  { 
    icon: linkedin, 
    url: "https://www.linkedin.com/in/aryan-sachdeva-5a25551b4/", 
  }, 
  { 
    icon: instagram, 
    url: "https://www.instagram.com/ary.nn__/", 
  }, 
  {
   icon: twitter,
   url: "https://twitter.com/AryanSdva/with_replies",
  }
 ]; 
const Footer = () => { 
 return ( 
  <Grid    
  id="socials-section"
  pt={[3,3,3,3]}
  pb={0}
  color="whitesmoke" 
  position={"relative"}
  alignContent="space-between" 
  height={"13vh"} 
  bgColor={"#093145"}
  //bottom={10}
  //wrap="wrap"
  //fontFamily={"space grotesk"}
  //fontWeight={"extrabold"}
  //justifyContent="center" 
  //w={["95vw","95vw","98vw","98vw"]}
  //ml={["2.5%","2.5%","1%","1%"]}
  //mb={2}
  //borderRadius={"0.5rem"}
  >

   <Flex 
   justify={"space-between"}
   ml={5}
   mr={5}
   fontFamily={"space grotesk"}
   fontWeight={"extrabold"}
   fontSize={[20,18,20,25]}

   >
   <HStack justify={"center"} align={"start"} color={""}>
   <h1>Socials:</h1>
   </HStack>

   <HStack spacing={[3,4,4,3]}> 
     {socials.map(({ icon, url}) => ( 
       <a 
          key={url} 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer" 
          lineHeight="1.2"
       >
        <img src={icon} width={30} height={30} alt="social-logo"/>
       </a> 
      ))} 
   </HStack>
   </Flex>
   <Grid 
   justifyContent={"center"}
   alignContent={"center"}
   fontSize={[16,16,18,20]}>
   <p>Aryan Sachdeva • © 2024</p> 
   </Grid>
</Grid>
 );
}; 
 
export default Footer; 