import { Box, Button, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; 
import React from "react"; 
import { Link } from "react-router-dom";
import '../styles/cards.css';
 
const Card = ({ title, description, imageSrc, url }) => { 
   return ( 
     <VStack className="cards">
      <Box p={4}>
        <Image className="cardimage" src={imageSrc} alt={title}/>
      </Box>
      <VStack spacing={4} p={4}>
        <HStack>
          <Heading as="h3" size="md">
            {title} 
          </Heading> 
        </HStack>
        <VStack>
          <Text className="description">
            {description}
          </Text> 
          <Link to={url}>
            <Button className="button-29" left={["36%","37%","38%","39%"]}>See more</Button> 
          </Link>
         </VStack>
       </VStack> 
     </VStack> 
   ); 
}; 
 
export default Card; 

