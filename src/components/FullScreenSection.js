import * as React from "react"; 
import { VStack, Box } from "@chakra-ui/react"; 
 import background from '../images/background.jpg';
/** 
* Illustrates the use of children prop and spread operator 
*/ 
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => { 
 return ( 
                                    
   <Box  w='100%'
   h='100%'
   bgGradient='linear(to-r, #764BA2, #537895, #FF0080)'>
   <VStack
     backgroundColor={boxProps.backgroundColor} 
     color={isDarkBackground ? "white" : "black"} 
   > 
     <VStack maxWidth="1280px" minHeight="100vh" {...boxProps}> 
       {children} 
     </VStack> 
   </VStack> 
   </Box>
 ); 
}; 
 
export default FullScreenSection;