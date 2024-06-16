import * as React from "react"; 
import { VStack} from "@chakra-ui/react"; 
import '../styles/full.css';

const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => { 
  //const isSafari= /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
 return ( 
  <VStack className="full-screen">
  <VStack maxWidth="100vw" minHeight="100vh" {...boxProps}> 
    {children} 
  </VStack> 
</VStack> 
 ); 
}; 
 
export default FullScreenSection;