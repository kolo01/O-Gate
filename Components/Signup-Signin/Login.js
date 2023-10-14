import { Box, Button, Center, FormControl, FormLabel, Input } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Login(){
    const router = useRouter()
    return(
    <>
        <Box width={"300px"}  display={"grid"}>
            {/* <Center  display={"grid"}> */}
            <FormControl display={"grid"}>
                <FormLabel>Numéro de téléphone</FormLabel>
                <Input placeholder="Enter email"/>
          
                <FormLabel>Mot de passe</FormLabel>
                <Input placeholder="Enter password"/>
            </FormControl>
            
            <Button mt={5} color={"white"} bgColor={"blue"} onClick={()=>router.push("/Home")}>Sign in</Button>
            <Box color={"blue.700"} textAlign={"center"}> 
            <Link href={"#"} >Forgot your password?</Link>
            </Box>
            
            {/* </Center> */}
        </Box>
    </>
    )
}