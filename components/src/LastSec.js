import { Button, Flex } from "@chakra-ui/react";
import Link from "next/link";

export default function Last(){
    const insc = "S’incrire"
    return(
        <Flex  marginTop={"20px"}>
        <Button width={"126px"} height={"48px"} borderRadius={"16px"}
        fontSize={"16px"}
        fontWeight={700} bgColor={"white"}
        color={"#219EF9"}
        _hover={{
            bgColor:"white",
            color:"#219EF9",
            border:"2px solid #219EF9",
            borderRadius:"16px",
            textDecoration:"none"
        }} border={"2px solid #219EF9"} as={Link} href={"/Inscription"}>
        {insc}
        </Button>
        <Button ml={5} width={"126px"} height={"48px"} borderRadius={"16px"}
        fontSize={"16px"}
        fontWeight={700} bgColor={"#219EF9"}
        color={"#FDFDFD"}
        _hover={{
            bgColor:"#219EF9",
            color:"#FDFDFD",
            border:"2px solid #219EF9",
            borderRadius:"16px",
            textDecoration:"none"
        }} border={"2px solid #219EF9"}  as={Link} href={"/Connexion"}>
        Connexion
        </Button>
        </Flex>
    )
}