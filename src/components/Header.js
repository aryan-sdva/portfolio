import React, { useEffect, useRef } from "react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faEnvelope, faX } from "@fortawesome/free-solid-svg-icons"; 
import { 
 faGithub, 
 faInstagram, 
 faLinkedin, 
 faMedium, 
 faSquareTwitter, 
 faStackOverflow,
 faTwitter,
 faTwitterSquare, 
} from "@fortawesome/free-brands-svg-icons"; 
import { Box, HStack } from "@chakra-ui/react"; 
 
const socials = [ 
 { 
   icon: faEnvelope, 
   url: "mailto: sachdevaaryan00@gmail.com", 
 }, 
 { 
   icon: faGithub, 
   url: "https://www.github.com/aryan-sdva", 
 }, 
 { 
   icon: faLinkedin, 
   url: "https://www.linkedin.com/in/aryan-sachdeva-5a25551b4/", 
 }, 
 { 
   icon: faInstagram, 
   url: "https://www.instagram.com/ary.nn__/", 
 }, 
 {
  icon: faTwitter,
  url: "https://twitter.com/AryanSdva/with_replies",
 }
]; 


const Header = () => { 
 const headerRef = useRef(null); 
 
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
 }; 
 return ( 
   <Box 
     position="absolute"
     top={5} 
     left={"20%"} 
     right={"20%"} 
     borderRadius={40}
     translateY={0} 
     transitionProperty="unset"
     transitionDuration=".3s" 
     //transitionTimingFunction="ease-in-out" 
     backgroundColor="black" 
     boxShadow={"5px 5px 30px whitesmoke"}
     ref={headerRef} 
   > 
     <Box color="lightgrey" 
     maxWidth="1280px" 
     margin="0 auto"> 
       <HStack 
         px={5} 
         py={4} 
         justifyContent="space-between" 
         alignItems="center" 
       > 
         <nav> 
           <HStack spacing={3}> 
             {socials.map(({ icon, url }) => ( 
               <a 
                 key={url} 
                 href={url} 
                 target="_blank" 
                 rel="noopener noreferrer" 
               > 
                 <FontAwesomeIcon icon={icon} size="2x" key={url} /> 
               </a> 
             ))} 
           </HStack> 
         </nav> 
         {/* <nav> 
           <HStack spacing={8} color={"whitesmoke"} 
           fontFamily={"outfit"} fontWeight={"bold"} fontSize={"2x"}> 
             <a ƒhref="#projects" onClick={handleClick("projects")}> 
               PROJECTS
             </a> 
             <a href="#contactme" onClick={handleClick("contactme")}> 
               CONTACT ME
             </a>
           </HStack> 
         </nav>  */}
       </HStack> 
     </Box> 
   </Box> 
 ); 
}; 

export default Header; 