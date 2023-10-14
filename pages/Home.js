import Last from "@/Components/LoginHome/Last";
import MiddleWay from "@/Components/LoginHome/MiddleWay";
import Profils from "@/Components/LoginHome/Profils";
import Navbar from "@/Components/assets/Navbar";
import { Flex } from "@chakra-ui/react";

export default function Home(){
    return(
    <>
        <Navbar/>
        <Flex  bgColor={"#d1d3be"}>
        <Profils/>
        <MiddleWay/>
        <Last/>
        </Flex>
    </>
    )
}