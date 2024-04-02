import React from "react";
import { Link, Box, Flex, Text, Button, Stack, AbsoluteCenter, transition, Collapse, useDisclosure, LinkBox } from "@chakra-ui/react";
import { FaMoon } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import ProjectsSection from "../components/ProjectsSection";
import newnew from "../images/newnew.jpg";
import gradient from "../images/gradient.jpeg";
import Logo from "../extra/Logo";

const NavBar = (props) => {
  const [isopen, setisopen] = React.useState(false);
  const toggle = () => setisopen(!isopen);

  return (
    <NavBarContainer isopen={isopen} {...props}>
      <FaMoon size={28}/>
        <MenuToggle toggle={toggle} isopen={isopen}/>
      <MenuLinks isopen={isopen} />
    </NavBarContainer>
  );
};

/* const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title color="black">Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
); */

/* const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    //xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title color="black">Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
); */

const MenuToggle = ({ toggle, isopen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isopen ? <IoClose size={32}/> : <TiThMenu size={32}/>}
    </Box>
  );
};

/* const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
}; */

const MenuLinks = ({ isopen }) => {
  
  const handleClick = (anchor) => () => { 
    const id = `${anchor}-section`; 
    const element = document.getElementById(id); 
    if (element) { 
      element.scrollIntoView({ 
        behavior: "smooth", 
        block: "start", 
      }); 
    } 
  }; 
  return (
    <Box
      display={{ base: isopen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={[6,6,4,4]}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
        pr={[0,0,0,4]}
        fontFamily="kanit"
      >
        <a href="#landing" onClick={handleClick("landing")}>
          <Button bg={"transparent"} _hover={{bg:["#093145"]}} fontSize={18}>Home</Button>
        </a>
        <a href="#projects" onClick={handleClick("projects")}>
          <Button bg={"transparent"} _hover={{bg:["#093145"]}} fontSize={18}>Projects</Button>
        </a> 
        <a href="#contactme" onClick={handleClick("contactme")}>
          <Button bg={"transparent"} _hover={{bg:["#093145"]}} fontSize={18}>Contact</Button>
        </a>
        <a href="#socials" onClick={handleClick("socials")}>
          <Button bg={"trnasparent"} _hover={{bg:["#093145"]}} fontSize={18}>Socials</Button>
        </a>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"  
      position={"fixed"}
      zIndex={100}
      w={["95%","95%","98%","98%"]}
      align="center"
      justify="space-between"
      wrap="wrap"
      mt={[2,2,3,3]}
      ml={["2.5%","2.5%","1%","1%"]}
      transition={" 0.5s ease-in-out"}
      borderRadius={20}
      p={[4,4,6,6]}
      bg={'rgba(0,0,0, 0.7)'}
      backdropFilter={"blur(20px)"}
      color="whitesmoke"
      fontStyle="space-grotesk"
      fontWeight="bold"
      {...props}
    >
      {children}
      </Flex>
  );
};

export default NavBar;