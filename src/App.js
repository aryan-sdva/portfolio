import { ChakraProvider,Box } from "@chakra-ui/react"; 
import Headera from "./components/Header"; 
import LandingSection from "./components/LandingSection"; 
import ProjectsSection from "./components/ProjectsSection"; 
import ContactMeSection from "./components/ContactMeSection"; 
import Footer from "./components/Footer"; 
import { AlertProvider } from "./context/alertContext"; 
import Alert from "./components/Alert"; 
import Header from "./components/Header2";

function App() { 
 return ( 
   <ChakraProvider> 
     <AlertProvider> 
       <main> 
         <Header/> 
         <LandingSection /> 
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