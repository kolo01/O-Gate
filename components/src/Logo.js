import { Box, Image, Text } from "@chakra-ui/react";

export default function Logo(){
    const logo ="O'Gate"
    return(
        <>
          <Box  width={"124px"} height={"41px"} ml={"20%"}  mr={"10%"} marginTop={"20px"} >
            <Image src="./all/OGate.png"  alt={logo}/>
        </Box>
        </>
    )
}