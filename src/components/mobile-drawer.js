import { useDisclosure, Flex, Box, Button,  VStack, Icon, HStack, Link as ChakraLink } from "@chakra-ui/react";
import React from "react";
import DrawerExample from "./drawers";
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
export default function MobileDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

  return (
    <Flex >

      <Button ref={btnRef} onClick={onOpen}>
        <IoMdMenu size="26px" />
      </Button>
      

      <DrawerExample
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <nav>
        <VStack alignItems="left">
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
        </VStack>
        </nav>
      </DrawerExample>
    </Flex>
  );
};
