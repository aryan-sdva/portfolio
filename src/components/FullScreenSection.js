import * as React from "react"; 
import { VStack, Box } from "@chakra-ui/react"; 
 import background2 from '../images/background2.jpeg';
 import gradient from '../images/gradient.jpeg';
/** 
* Illustrates the use of children prop and spread operator 
*/ 
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => { 
 return ( 
                                    
   <Box bgImage={gradient} bgPosition="center" bgSize={"200vh"} bgAttachment={"fixed"}>
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