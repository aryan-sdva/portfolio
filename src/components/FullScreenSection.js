import * as React from "react"; 
import { VStack, Box } from "@chakra-ui/react"; 
 import background2 from '../images/background2.jpeg';
 import newnew from '../images/newnew.jpg';
/** 
* Illustrates the use of children prop and spread operator 
*/ 
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => { 
 return ( 
   <Box bgGradient="linear(to-r, teal.500, yellow.400)">
   <VStack> 
     <VStack maxWidth="1280px" minHeight="100vh" backgroundColor={boxProps.backgroundColor} 
     color={isDarkBackground ? "white" : "black"} 
     {...boxProps}> 
       {children} 
     </VStack> 
   </VStack> 
   </Box>
 ); 
}; 
 
export default FullScreenSection;