import React from 'react';
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, 
         DrawerOverlay, DrawerContent,
         DrawerCloseButton, Flex, Text} from "@chakra-ui/react";
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
export default function DrawerExample({
  placement = "right",
  width,
  isopen,
  children,
  onClose,
  btnRef,
  title = "Menu",
  footer,
}) {
  return (
    <Flex w={width}>
      <Drawer
        isopen={isopen}
        placement={placement}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent alignItems="center">
          <DrawerCloseButton alignSelf="end" mx={15} my={15} />
          <DrawerHeader my={15}>
            <Text as="p"> {title} </Text>
          </DrawerHeader>
          <DrawerBody>
            <nav>
        <VStack alignItems="center">
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
        </nav></DrawerBody>
          <DrawerFooter>{footer}</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
