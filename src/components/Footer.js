import React from "react"; 
import {Box, Flex, Grid, HStack, VStack} from "@chakra-ui/react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { faEnvelope} from "@fortawesome/free-solid-svg-icons"; 
import { 
 faGithub, 
 faInstagram, 
 faLinkedin,
 faTwitter, 
} from "@fortawesome/free-brands-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const socials = [ 
  { 
    icon: faEnvelope, 
    url: "mailto: sachdevaaryan00@gmail.com", 
  }, 
  { 
    icon: faGithub, 
    url: "https://www.github.com/aryan-sdva", 
  }, 
  { 
    icon: faLinkedin, 
    url: "https://www.linkedin.com/in/aryan-sachdeva-5a25551b4/", 
  }, 
  { 
    icon: faInstagram, 
    url: "https://www.instagram.com/ary.nn__/", 
  }, 
  {
   icon: faTwitter,
   url: "https://twitter.com/AryanSdva/with_replies",
  }
 ]; 
const Footer = () => { 
 return ( 
  <Grid    
         pt={[3,3,3,3]}
         pb={0}
         color="whitesmoke" 
         position={"relative"}
         //bottom={10}
         //wrap="wrap"
         //fontFamily={"space grotesk"}
         //fontWeight={"extrabold"}
         //justifyContent="center" 
         alignContent="space-between" 
         w={["95vw","95vw","98vw","98vw"]}
         ml={["2.5%","2.5%","1%","1%"]}
         mb={2}
         height={"15vh"} 
         bgColor={"grey"}
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
          <HStack justify={"center"} align={"start"}>
          <h1>Socials:</h1>
          {/* <h2>Reach out to me here <FaArrowAltCircleRight/></h2> */}
          </HStack>

          <HStack spacing={[3,4,4,5]}> 
            {socials.map(({ icon, url}) => ( 
              <a 
                 key={url} 
                 href={url} 
                 target="_blank" 
                 rel="noopener noreferrer" 
              > 
                <FontAwesomeIcon icon={icon} key={url} /> 
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