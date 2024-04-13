import * as React from "react"; 
import { VStack, Box } from "@chakra-ui/react"; 
/** 
* Illustrates the use of children prop and spread operator 
*/ 
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => { 
  //const isSafari= /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
 return ( 
  <VStack 
  /* bgImage={pattern} 
  bgSize={"cover"} 
  bgPosition={"center"} 
  bgAttachment={"fixed"}  */
  bgGradient='linear(to-l, #2e3192, #1bffff)'
  >
  <VStack maxWidth="100vw" minHeight="100vh" {...boxProps}> 
    {children} 
  </VStack> 
</VStack> 
 ); 
}; 
 
export default FullScreenSection;