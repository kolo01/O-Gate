import { EmailIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function Profils(){
    return(
        <Box mr={10}>
        <Box bgColor={"white"} ml={2} mt={5} border={"1px solid gray"}  borderRadius={5} width={"300px"}>
            <Flex bgColor={"gray"}>
            <Text letterSpacing={"2px"}>PREMUIM</Text>
            <Image mt={5}src="./Home/First.jpeg"  width={"100px"} height={"100px"} alt=" photo utilisateur" borderRadius={"50%"}/>
            </Flex>
            <Box bgColor={"white"} mt={-10} pt={10} borderRadius={4}>
                <Text textAlign={"center"} fontSize={"20px"} fontWeight={700}> Mon nom .........</Text>
                <Text textAlign={"center"} fontSize={"15px"} fontWeight={"light"}> Developpeur web et mobile pour La team K, freelance et developpeur independant</Text>
                <Box border={"1px solid black"} width={"full"} height={"1px"} opacity={0.3} my={5}></Box>
                <Flex justifyContent={"space-between"}>
                    <Text>Vues du profil</Text>
                    <Text color={"blue.600"}>44</Text>
                </Flex>
                <Flex justifyContent={"space-between"}>
                    <Text>Voir toutes les statistiques</Text>
                    <Text color={"blue.600"}>0</Text>
                </Flex>
                <Box border={"1px solid black"} width={"full"} height={"1px"} opacity={0.3} my={5}></Box>
                <Flex>
                    <EmailIcon fontSize={20} color={"orange.600"}/>
                    <Text ml={2} fontWeight={600}>Voir toutes les fonctionnalités Premuim </Text>
                </Flex>
                <Box border={"1px solid black"} width={"full"} height={"1px"} opacity={0.3} my={5}></Box>
                <Flex>
                    <EmailIcon fontSize={20} color={"orange.600"}/>
                    <Text ml={2} fontWeight={600}>Mes éléments</Text>
                </Flex>
            </Box>
        </Box>
        <Box bgColor={"white"} ml={2} my={5} border={"1px solid gray"}  borderRadius={5} width={"300px"}>
            <Flex >
            <Text>Récent</Text>
            </Flex>
            <Box bgColor={"white"} mt={-10} pt={10} borderRadius={4}>
                <Text fontSize={"15px"} fontWeight={"light"}> Data minning, Statistics,Big Data</Text>
                <Text fontSize={"15px"} fontWeight={"light"}> Data minning, Statistics,Big Data</Text>
                <Text fontSize={"15px"} fontWeight={"light"}> Data minning, Statistics,Big Data</Text>
            </Box>
        </Box>
        </Box>
    )
}