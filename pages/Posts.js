import {Box, Button, Center, Flex, Input, InputGroup, Select, Text } from '@chakra-ui/react'
import NavbarCo from "@/components/home/NavbarCo";
export default function Postes(){
const enr ="Formulaire d'enregistrement de postes"
    return(
        <>
         <NavbarCo/>
        <Center width={"full"} display={"grid"} mb={10}>
            <Text fontSize={"30px"} fontWeight={700}>{enr}</Text>
            <Box width={"100%"}>
                <Flex>
                    <InputGroup>
                    <Input type="text" placeholder='id(champ caché)' disabled={true}/>
                    </InputGroup>
                </Flex>
                <Flex justifyContent={"space-evenly"}>
                    <InputGroup display={"grid"} width={"50%"} mr={5}>
                    <Text>Description : </Text>
                    <Input type="text" placeholder='Description' />
                    </InputGroup>
                    <Box  width={"50%"}>
                        <Text>Type de poste : </Text>
                    <Select>
                        <option>Vente </option>
                        <option>Location</option>
                       
                    </Select>
                    </Box>
                </Flex>
                <Flex justifyContent={"space-evenly"} mt={5}>
                <Box  width={"50%"}>
                        <Text>Type de bien : </Text>
                    <Select>
                        <option>Terrain</option>
                        <option>Maison</option>
                    </Select>
                    </Box>
                    <InputGroup display={"grid"} width={"50%"} ml={5}>
                    <Text>Nombre de pièces : </Text>
                    <Input type="number" placeholder='' />
                    </InputGroup>
                   
                </Flex>
                <Flex justifyContent={"space-evenly"} mt={5}>
                <InputGroup display={"grid"} width={"50%"} >
                    <Text>Nombre de salon : </Text>
                    <Input type="number" placeholder='' />
                    </InputGroup>
                    <InputGroup display={"grid"} width={"50%"} ml={5}>
                    <Text>Nombre de chambres : </Text>
                    <Input type="number" placeholder='' />
                    </InputGroup>
                   
                </Flex>
                <Flex justifyContent={"space-evenly"} mt={5}>
                <InputGroup display={"grid"} width={"50%"} >
                    <Text>Prix: </Text>
                    <Input type="number" placeholder='' />
                    </InputGroup>
                    <Box  width={"50%"} ml={5}>
                        <Text>Periodicité : </Text>
                    <Select>
                        <option>1 mois</option>
                        <option>3 mois</option>
                        <option>6 mois</option>
                        <option>9 mois</option>
                    </Select>
                    </Box>
                   
                </Flex>
                <Flex justifyContent={"space-evenly"} mt={5}>
                <InputGroup display={"grid"} width={"50%"} >
                    <Text>Apport initial: </Text>
                    <Input type="number" placeholder='' />
                    </InputGroup>
                    <InputGroup display={"grid"} width={"50%"} ml={5}>
                    <Text>Localisation : </Text>
                    <Input type="text" placeholder='' />
                    </InputGroup>
                   
                </Flex>
                <Flex justifyContent={"space-evenly"} mt={5}>
                <InputGroup display={"grid"} width={"50%"} >
                    <Text>Latitude: </Text>
                    <Input type="number" placeholder='' />
                    </InputGroup>
                    <InputGroup display={"grid"} width={"50%"} ml={5}>
                    <Text>Longitude : </Text>
                    <Input type="number" placeholder='' />
                    </InputGroup>
                   
                </Flex>
                <Flex justifyContent={"space-evenly"} mt={5}>
                <Box  width={"50%"}>
                        <Text>Type appartement : </Text>
                    <Select>
                        <option>Maison basse</option>
                        <option>Villa</option>
                        <option>Duplex</option>
                        
                    </Select>
                    </Box>
                    <Box  width={"50%"} ml={5}>
                        <Text>Type de requête : </Text>
                    <Select>
                        <option>Exemple 1</option>
                        <option>Exemple 2</option>
                        <option>Exemple 3</option>
                       
                    </Select>
                    </Box>
                  
                   
                </Flex>
            </Box>
            <Button mt={5} bgColor={"cyan"} color={"white"} _hover={{
                bgColor:"cyan" ,
                color:"white"
            }}>Valider poste</Button>
        </Center>
        </>
    )
}