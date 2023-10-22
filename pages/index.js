import Navbar from '@/components/home/Navbar'
import Box1 from '@/components/src/home/Box1'
import Box2 from '@/components/src/home/Box2'
import { Box, Flex, Image } from '@chakra-ui/react'


export default function Home() {
  return (
    <Box >
    <Navbar/>
    <Flex mx={"10%"} mt={"5%"}>
      <Box>
      <Box1/>
      <Image mt={"-150px  "} alt='clé en main' src="./all/key.png"/> 
      </Box>
      <Box2/>
    </Flex>
    </Box>
    )
}
