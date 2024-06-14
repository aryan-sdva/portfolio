import React, {useEffect} from "react"; 
import { useFormik } from "formik"; 
import { 
 Box, 
 Button, 
 FormControl, 
 FormErrorMessage, 
 FormLabel, 
 Heading, 
 Input, 
 Select, 
 Textarea, 
 VStack, 
} from "@chakra-ui/react"; 
import * as Yup from 'yup'; 
import FullScreenSection from "./FullScreenSection"; 
import useSubmit from "../hooks/useSubmit"; 
import {useAlertContext} from "../context/alertContext"; 
 
/** 
* Covers a complete form implementation using formik and yup for validation 
*/ 
const ContactMeSection = () => { 
 const {isLoading, response, submit} = useSubmit(); 
 const { onOpen } = useAlertContext(); 
 
 const formik = useFormik({ 
   initialValues: { 
     firstName: "", 
     email: "", 
     type: "hireMe", 
     comment: "", 
   }, 
   onSubmit: (values) => { 
     submit('https://john.com/contactme', values); 
   }, 
   validationSchema: Yup.object({ 
     firstName: Yup.string().required("Required"), 
     email: Yup.string().email("Invalid email address").required("Required"), 
     comment: Yup.string() 
       .min(25, "Must be at least 25 characters") 
       .required("Required"), 
   }), 
 }); 
 
 useEffect(() => { 
   if (response) { 
     onOpen(response.type, response.message); 
     if (response.type === 'success') { 
       formik.resetForm(); 
     } 
   } 
 }, [response]); 
 
 return ( 
   <FullScreenSection 
     spacing={8} 
   > 
      <VStack w="95vw" p={2} id="contactme-section" fontFamily="kanit" alignItems="flex-start"> 
       <Heading as="h1" color={"#bcff1f"} ml={5}> 
         Contact Me 
       </Heading> 
       <Box p={6} rounded="md" w="100%"> 
         <form action="https://api.sheetmonkey.io/form/dY9sLXhC71nuXRReksJiGE" method="POST"> 
           <VStack spacing={4}> 
             <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}> 
               <FormLabel htmlFor="firstName" color={"beige"} fontFamily="cabin" fontWeight={900} fontSize={20}>Name</FormLabel> 
               <Input 
                 id="firstName" 
                 name="firstName" 
                 {...formik.getFieldProps("firstName")} 
                 color={"beige"} fontFamily="cabin" fontSize={20}
               /> 
               <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage> 
             </FormControl> 
             <FormControl isInvalid={!!formik.errors.email && formik.touched.email}> 
               <FormLabel htmlFor="email" color={"beige"} fontFamily="cabin" fontWeight={900} fontSize={20}>Email Address</FormLabel> 
               <Input 
                 id="email" 
                 name="email" 
                 type="email" 
                 {...formik.getFieldProps("email")} 
                 color={"beige"} fontFamily="cabin" fontSize={20}
               /> 
               <FormErrorMessage>{formik.errors.email}</FormErrorMessage> 
             </FormControl> 
             <FormControl> 
               <FormLabel htmlFor="type" color={"beige"} fontFamily="cabin" fontWeight={900} fontSize={20}>Type of enquiry</FormLabel> 
               <Select id="type" name="type" color={"beige"} fontFamily="cabin" fontSize={20}{...formik.getFieldProps("type")}> 
                 <option value="Freelance Project Proposal" color={"beige"} fontFamily="cabin">Freelance project proposal</option> 
                 <option value="UI/UX Design project" color={"beige"} fontFamily="cabin"> 
                   UI/UX Design project 
                 </option> 
                 <option value="Other" color={"beige"} fontFamily="cabin">Other</option> 
               </Select> 
             </FormControl> 
             <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}> 
               <FormLabel htmlFor="comment" color={"beige"} fontFamily="cabin" fontWeight={900} fontSize={20}>Your message</FormLabel> 
               <Textarea 
                 id="comment" 
                 name="comment" 
                 height={250} 
                 {...formik.getFieldProps("comment")} 
                 color={"beige"} fontFamily="cabin" fontSize={20}
               /> 
               <FormErrorMessage>{formik.errors.comment}</FormErrorMessage> 
             </FormControl> 
             <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}> 
               Submit 
             </Button> 
           </VStack> 
         </form> 
       </Box> 
     </VStack>
   </FullScreenSection> 
 ); 
}; 
 
export default ContactMeSection;