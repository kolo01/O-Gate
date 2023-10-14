import { Button, Flex, Text } from "@chakra-ui/react";
import Logo from "./Logo";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar(){
    const router = useRouter()
    return(<>
        <Flex justifyContent={"space-between"} mx={10}>
            <Flex justifyContent={"space-around"}>
            <Logo/>
            <Flex mt={2} ml={10} >
                <Link href={"#"} >Achat</Link>
                <Text mx={2}>-</Text>
                <Link href={"#"}>Location</Link>
                <Text mx={2}>-</Text>
                <Link href={"#"}>Vente</Link>
                <Text mx={2}>-</Text> 
                <Link href={"#"}>Spécialites</Link>
            </Flex>
            </Flex>
            <Button bgColor={"#fff"} _hover={{bgColor:"white"}} onClick={()=>router.push("/Connexion")}>Se connecter</Button>
        </Flex>
    </>)
}