import { Button, Flex, SimpleGrid } from "@chakra-ui/react";
import Logo from "./Logo";

export default function Footer(){
    const footer = ["A propos","Accessibilité","Conditions générales ","Politique de confidentialité","Politique relative aux cookies"

    ]
    return(
        <Flex mx={[5,5,5,20,20]}>
        <Logo/>
        <SimpleGrid  width={"100%"}display={"block"}
          
          >
          {footer.slice(0,10).map((data,index)=>(
               <Button key={index} bgColor={"white"} 
               m={1}
            //    border={"1px solid white"}
              
                p={5} fontSize={"15px"} 
              _hover={{
                   bgColor:"white",
                   border:"1px solid white"
               }}>
                      {data} 
                   </Button>
          ))}
          </SimpleGrid>
        </Flex>
    )
}