import React from "react";
import { Link, Box, Flex, Text, Button, Stack, AbsoluteCenter, transition, Collapse, useDisclosure } from "@chakra-ui/react";
import { FaMoon } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import ProjectsSection from "../components/ProjectsSection";
import newnew from "../images/newnew.jpg";
import gradient from "../images/gradient.jpeg";
import Logo from "../extra/Logo";

/* const headerRef = useRef(null); 
 
useEffect(() => { 
  let prevScrollPos = window.scrollY; 

  const handleScroll = () => { 
    const currentScrollPos = window.scrollY; 
    const headerElement = headerRef.current; 
    if (!headerElement) { 
      return; 
    } 
    if (prevScrollPos > currentScrollPos) { 
      headerElement.style.transform = "translateY(0)"; 
    } else { 
      headerElement.style.transform = "translateY(0)"; 
    } 
    prevScrollPos = currentScrollPos; 
  } 
  window.addEventListener('scroll', handleScroll) 

  return () => { 
    window.removeEventListener('scroll', handleScroll) 
  } 
}, []); 

const handleClick = (anchor) => () => { 
  const id = `${anchor}-section`; 
  const element = document.getElementById(id); 
  if (element) { 
    element.scrollIntoView({ 
      behavior: "smooth", 
      block: "start", 
    }); 
  } 
};  */

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer isOpen={isOpen} {...props}>
      <FaMoon size={28}/>
        <MenuToggle toggle={toggle} isOpen={isOpen}/>
      <MenuLinks isOpen={isOpen} />
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

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <IoClose size={32}/> : <TiThMenu size={32}/>}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={[6,6,8,8]}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem color="white" fontFamily="space grotesk" fontWeight="bold" to="/">Home</MenuItem>
        <MenuItem color="white" fontFamily="space grotesk" fontWeight="bold" to="/projects">Projects</MenuItem>
        <MenuItem color="white" fontFamily="space grotesk" fontWeight="bold" to="/faetures">Features </MenuItem>
        <MenuItem color="white" fontFamily="space grotesk" fontWeight="bold" to="/pricing">Pricing </MenuItem>
        <MenuItem color="white" fontFamily="space grotesk" fontWeight="bold" to="/signup" isLast>
          <Button
            size={["sm","xs","sm","sm"]}
            rounded="md"
            color={["purple.500", "purple.500", "purple.500", "rgba(0,0,0, 0.7)"]}
            bg={["white", "white", "white", "white"]}
            _hover={{
                bg: ["purple.100", "purple.100", "purple.100", "green.100"]
              }}
          >
            Create Account
          </Button>
        </MenuItem>
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
      borderRadius={[20,20,20,20]}
      p={[4,4,6,6]}
      bg={'rgba(0,0,0, 0.7)'}
      backdropFilter={"blur(20px)"}
      color={["white", "white", "white", "yellow.200"]}
      {...props}
    >
      {children}
      </Flex>
  );
};

export default NavBar;