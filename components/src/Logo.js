import { Box, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Logo(){
    const logo ="O'Gate"
    const router = useRouter()
    return(
        <>
          <Box  width={"124px"} height={"41px"} ml={"20%"} cursor={"pointer"} onClick={()=>router.push("/")} mr={"10%"} marginTop={"20px"} >
            <Image src="./all/OGate.png"  alt={logo}/>
        </Box>
        </>
    )
}