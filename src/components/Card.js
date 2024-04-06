import { Box, Button, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; 
import React from "react"; 
import { Link } from "react-router-dom";
 
const Card = ({ title, description, imageSrc, url }) => { 
   return ( 
     <VStack 
       color="black" 
       backgroundColor="rgba(247,249,250,0.5)" 
       cursor="grab" 
       borderRadius="20" 
       height="555px"
       position={"relative"}
       boxShadow={"2px 4px 10px rgba(0,0,0,0.8)"}
     > 
       <Box  p={4}>
       <Image borderRadius="16" boxShadow={"3px 4px 10px rgba(48,55,71)"} src={imageSrc} alt={title} /> 
       </Box>
       <VStack spacing={4} p={4}> 
         <HStack> 
           <Heading as="h3" size="md"> 
             {title} 
           </Heading> 
         </HStack> 
         <VStack>
         <Text color="#0f5375" fontWeight="800" fontSize={17} fontFamily={"space grotesk"} textAlign={"center"}> 
           {description} 
         </Text> 

           <Link to={url}>
           <Button 
             bgColor={"#8fd68b"} 
             _hover={{bg:"#5acc54"}}
             position={"absolute"}
             bottom={2}
             left={["35%","38%","38%","38%"]}
           >See more</Button> 
           </Link>
           {/* <FontAwesomeIcon icon={faArrowRight} size="1x" />  */}

         </VStack>
       </VStack> 
     </VStack> 
   ); 
}; 
 
export default Card; 