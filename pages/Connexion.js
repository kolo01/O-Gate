
import Navbar from "@/components/home/Navbar";
import { Center, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";

export default function Connexion(){
    const welcome = "Bienvenue sur O'Gate"
    return(
        <>
        <Navbar/>
        <Center mt={"10vh"}>
            <Text fontSize={20} fontWeight={600} mb={5}>{welcome}</Text>
        </Center>
        <Center>
        <Tabs>
  <TabList>
    <Tab>Sign in</Tab>
    <Tab>New account</Tab>
  
  </TabList>

  <TabPanels>
  
   
  </TabPanels>
</Tabs>
        </Center>
      
        </>
    )
}