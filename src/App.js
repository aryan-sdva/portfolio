import { ChakraProvider,Box } from "@chakra-ui/react"; 
import NavBar from "./components/Header";
import LandingSection from "./components/LandingSection"; 
import ProjectsSection from "./components/ProjectsSection"; 
import ContactMeSection from "./components/ContactMeSection"; 
import Footer from "./components/Footer"; 
import { AlertProvider } from "./context/alertContext"; 
import Alert from "./components/Alert"; 


function App() { 
 return ( 
   <ChakraProvider> 
     <AlertProvider> 
       <main> 
         <NavBar/> 
         <LandingSection/> 
         <ProjectsSection /> 
         <ContactMeSection /> 
         <Footer /> 
         <Alert /> 
       </main> 
     </AlertProvider> 
   </ChakraProvider> 
 ); 
} 

export default App;