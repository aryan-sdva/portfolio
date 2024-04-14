import React from "react";
import { Link, Box, Flex, Text, Button, Stack} from "@chakra-ui/react";
import sun from '../logos/sun.png';
import open from '../logos/open.png';
import close from '../logos/close.png';
import code from '../logos/code.png';


const NavBar = (props) => {
  const [isopen, setisopen] = React.useState(false);
  const toggle = () => setisopen(!isopen);

  return (
    <NavBarContainer isopen={isopen} {...props}>
      <img src={code} alt="sun-logo" height={30} width={30}/>
        <MenuToggle toggle={toggle} isopen={isopen}/>
      <MenuLinks isopen={isopen} />
    </NavBarContainer>
  );
};
const MenuToggle = ({ toggle, isopen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isopen ? <img src={close} height={32} width={32} alt="menu-close"/> :<img src={open} height={32} width={32} alt="menu-open"/>}
    </Box>
  );
};
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