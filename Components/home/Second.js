import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";

export default function Second(){
    const suggestion =["Ingenierie","Developpement commercial","Finance","Adjoint administratif","Vendeur","Service clients","Exploitation","Technologies de l'information","Marketing","Ressources humaines","Service de la santé","Ventes","Gestion de projets et de programmes","Comptabilité","Arts et design","Services a la communauté et services sociaux","Consulting"]
    return(
        <>
        <Flex width={"90%"} mx={10} mb={20}>
            <Text width={"40%"} fontSize={"40px"} ml={20} >
            Trouvez votre travail ou votre stage idéal 
            </Text>

            <Box width={"60%"}>
                <Text> Suggestions de recherches </Text>
            <SimpleGrid  width={"100%"}display={"block"}
          
            >
            {suggestion.slice(0,10).map((data,index)=>(
                 <Button bgColor={"white"} 
                 m={1}
                 boxShadow={"0 0 0 1px black"} 
                  p={5} fontSize={"20px"} borderRadius={"25px"}
                _hover={{
                     bgColor:"rgba(0, 0, 0, 0.1)"
                 }}>
                        {data} 
                     </Button>
            ))}
            </SimpleGrid>
            </Box>
        </Flex>
        </>
    )
}