import React from "react"; 
import {Box, Flex, HStack} from "@chakra-ui/react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faEnvelope, faX } from "@fortawesome/free-solid-svg-icons"; 
import { 
 faGithub, 
 faInstagram, 
 faLinkedin, 
 faMedium, 
 faSquareTwitter, 
 faStackOverflow,
 faTwitter,
 faTwitterSquare, 
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
   <Box backgroundColor="blackAlpha.800"> 
     <footer> 
       <Flex 
         margin="0 auto" 
         px={12} 
         color="whitesmoke" 
         fontSize={"xl"}
         fontFamily={"space grotesk"}
         justifyContent="center" 
         alignItems="center" 
         maxWidth="1024px" 
         height={200} 
       > 
        <HStack>
         <nav> 
           <HStack spacing={3}> 
             {socials.map(({ icon, url }) => ( 
               <a 
                 key={url} 
                 href={url} 
                 target="_blank" 
                 rel="noopener noreferrer" 
               > 
                 <FontAwesomeIcon icon={icon} size="2x" key={url} /> 
               </a> 
             ))} 
           </HStack> 
         </nav> 
         <p>Aryan Sachdeva • © 2024</p> 
         </HStack>  
       </Flex> 
     </footer> 
   </Box> 
 ); 
}; 
 
export default Footer; 