import { Avatar, Box, Button, Flex, Image, Text,  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Center, } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

export default function Messages(
{  idM,
  propio,
  date,
  message,
  image,}
  
) {
  const Imaged = ["./images/P1.jpeg","./images/P2.jpeg","./images/P3.jpeg","./images/p4.jpeg"]
  const { isOpen, onOpen, onClose } = useDisclosure()
    const item =[{images:"./like.png",alte:"like"},{images:"./comment.png",alte:"comment"},{images:"./share.png",alte:"share"},{images:"./save.png",alte:"save"},]
    const HandleDrawner=()=>{
      onOpen()
    }
  return (
    <>
      <Box width={{base:"400px",lg:"542px"}} height={"fit-content"} py={2} mb={5} bgColor={"white"} borderRadius={25} p={5} >
        <Flex justifyContent={"space-between"} >
          <Flex mt={2} ml={5}>
            <Avatar />
            <Box ml={2}>
              <Text fontWeight={700}>{propio}</Text>
        
              <Text fontWeight={"hairline"} color={"#D9D9D9"} fontSize={"12px"}>
                {date}
              </Text>
               {/* <Text fontWeight={"hairline"} color={"#D9D9D9"} fontSize={"12px"}>
                {"date"}
              </Text> */}
            </Box>
          </Flex>
          <Button
            bgColor={"white"}
            color={"#219EF9"}
            _hover={{
              bgColor: "white",
            }}
          >
            Suivre
          </Button>
        </Flex>
        <Flex>
        <Text width={"90%"} my={5} noOfLines={5}>{message}</Text>
        <Button mt={"110px"} onClick={()=>HandleDrawner()} bgColor={"transparent"} _hover={{
          bgColor:"transparent"
        }}>Voir plus</Button>
        </Flex>
        
        {/* <Text width={"50%"}>{"message"}</Text> */}
        <Box
        width={"full"}
        // bgImage={image}
        // bgColor={"gray"}
        height={"349px"}
        bgRepeat={"no-repeat"}
        bgSize={"contain"}
         mb={2}>
          <Carousel autoPlay infiniteLoop>
            {Imaged.map((images,index)=><Box key={index} width="full"
              height={"349px"}
              bgRepeat={"no-repeat"}
              bgSize={"contain"}
        bgImage={images}
              
            />)}
          </Carousel>
        </Box>
        <Flex width={"192px"} height={"36px"}>
            {item.map((data,index)=><Image key={index} src={data.images} alt={data.alte}/>)}
        </Flex>
      </Box>


      <Drawer onClose={onClose} isOpen={isOpen} size={"full"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader><Center>{`Vente de maison`}</Center></DrawerHeader>
          <DrawerBody mx={"20%"} display={"grid"}>
            <Box mb={10}>
           <Text fontWeight={600} fontSize={"15px"}>
           {message}
           </Text>
           <Center width={"full"}>
           <Box
           cursor={"pointer"}
           mt={5}
        width={"450px"}
        // bgImage={image}
        // bgColor={"gray"}
        height={"250px"}
        bgRepeat={"no-repeat"}
        bgSize={"contain"}
         mb={2}>
          <Carousel autoPlay infiniteLoop showIndicators={false}  >
            {Imaged.map((images,index)=><Box key={index} width="400px"
              height={"349px"}
              bgRepeat={"no-repeat"}
              bgSize={"cover"}
        bgImage={images}
              
            />)}
          </Carousel>
        </Box>
        </Center>
        </Box>
        <Box mt={[20,20,20,10,10]}>
          <Text fontSize={"25px"} fontWeight={700}>Commentaires</Text>
        </Box>
        
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
