import React from "react"; 
import {Box, Flex, Grid, HStack, VStack} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faEnvelope, faX } from "@fortawesome/free-solid-svg-icons"; 
import { 
 faGithub, 
 faInstagram, 
 faLinkedin, 
 faTwitter,
} from "@fortawesome/free-brands-svg-icons"; 

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
       <Flex
         as="nav"
         //position={"fixed"}
         color="whitesmoke" 
         fontFamily={"space grotesk"}
         fontWeight={"extrabold"}
         fontSize={[15,15,20,20]}
         justifyContent="center" 
         alignItems="center" 
         w={["95%","95%","98%","98%"]}
         ml={["2.5%","2.5%","1%","1%"]}
         mb={5}
         height={100} 
         bg="rgba(0,0,0,0.7)" 
         borderRadius={4}
       > 
        <VStack>
          <p>Socials:</p>
          <nav> 
            <HStack spacing={[3,4,4,5]}> 
             {socials.map(({ icon, url }) => ( 
               <a 
                 key={url} 
                 href={url} 
                 target="_blank" 
                 rel="noopener noreferrer" 
               > 
                <FontAwesomeIcon icon={icon} size="xl" key={url} /> 
               </a> 
             ))} 
            </HStack> 
          </nav> 
        <VStack>
          <p>Aryan Sachdeva • © 2024</p> 
        </VStack>
        </VStack>
       </Flex> 
 ); 
}; 
 
export default Footer; 