import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import Footer from "../assets/Footer";
import Logo from "../assets/Logo";
export default function Four(){
    const general = ["S'inscrire","Assistance clientèle","A propos","Presse","Blog","Carrières"]
    return(
        <>
        <SimpleGrid columns={[1,1,5,5,5]} py={5} bgColor={"whitesmoke"} px={[5,5,"20px","100px","100px"]}>
            <Logo/>
            <Box>
                <Text fontWeight={700}>Général</Text>
                {general.map((data,index)=>(
                    <Text key={index} fontWeight={500} color={"gray.600"}>{data}</Text>
                    ))}
            </Box>
            <Box>
                <Text fontWeight={700}>Parcourir OGate</Text>
                {general.map((data,index)=>(
                    <Text key={index+general.length+1} fontWeight={500} color={"gray.600"}>{data}</Text>
                    ))}
            </Box>
            <Box>
                <Text fontWeight={700}>Business solutions</Text>
                {general.map((data,index)=>(
                    <Text key={index+general.length+2}  fontWeight={500} color={"gray.600"}>{data}</Text>
                    ))}
            </Box>
            <Box>
                <Text fontWeight={700}>Annuaires</Text>
                {general.map((data,index)=>(
                    <Text key={index+general.length+3}  fontWeight={500} color={"gray.600"}>{data}</Text>
                    ))}
            </Box>
        </SimpleGrid>
        <Footer/>
        </>
    )
}