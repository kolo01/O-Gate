import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";

export default function Second(){
    const suggestion =["Achat de terrain","Vente de terrain","Achat de maison","Vente de maison","Construction de maison","Devis de construction","Amenagement","Voir plus"]
    return(
        <>
        <Flex width={"90%"} mx={[0,0,0,10,10]} mb={20} display={["grid","grid","grid","flex","flex"]}>
            <Text width={["100%","100%","100%","40%","40%"]} fontSize={"40px"} ml={[0,0,0,20,20]} >
            Trouvez votre maison ou votre terrain
            </Text>

            <Box width={["100%","100%","100%","60%","60%"]}>
                <Text> Suggestions de recherches </Text>
            <SimpleGrid  width={"100%"}display={"block"}
          
            >
            {suggestion.slice(0,10).map((data,index)=>(
                 <Button key={index} bgColor={"white"} 
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