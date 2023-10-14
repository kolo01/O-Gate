import { Box, Button, Center, Checkbox, CheckboxGroup, Flex, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Register(){
    return(<>
    
      <Box>
            <Center  display={"grid"}>
            <FormControl>
                <FormLabel>Numéro de téléphone</FormLabel>
                <Input placeholder="Enter email"/>
          
                <FormLabel>Mot de passe</FormLabel>
                <Input placeholder="Enter password"/>
                <Box ml={5} color={"gray"} fontSize={"14px"}>
                    <Text>At least 8 characters</Text>
                    <Text>Mix of letters and numbers</Text>
                    <Text>At least 1 special character</Text>
                    <Text>At least 1 lowercase and 1 uppercase letter</Text>
                </Box>
                <Flex>
                    <CheckboxGroup>
                        <Checkbox mr={2}/>
                        <Text> Je suis un proprietaire / professionnel du métier</Text>
                    </CheckboxGroup>
               
                </Flex>
                
            </FormControl>
            <Button mt={5} color={"white"} bgColor={"blue"}>Register</Button>
            
            </Center>
        </Box>
    </>)
}