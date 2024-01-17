import Navbar from '@/components/home/Navbar'
import Box1 from '@/components/src/home/Box1'
import Box2 from '@/components/src/home/Box2'
import { Box, Flex, Image } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import secureLocalStorage from 'react-secure-storage'


export default function Home() {
const router = useRouter()
const  [verifCo,setVerifCo] = useState(false)

  useEffect(()=>{
    if(localStorage.getItem("local")){
      setVerifCo(true)
    }
  },[])
if(verifCo){
router.push("/home")
}
else
{
  return (
    <Box >
    <Navbar/>
    <Flex mx={{base:"0%",lg:"10%"}} mt={"5%"}>
      <Box display={["none","none","none","grid","grid"]}>
      <Box1/>
      <Image mt={"-150px  "} alt='clé en main' src="./all/key.png"/> 
      </Box>
      <Box2/>
    </Flex>
    </Box>
    )
}

}
