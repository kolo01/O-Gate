import { Avatar, Box, Button, Flex, Image, Text } from "@chakra-ui/react";

export default function Messages(
{  idM,
  propio,
  date,
  message,
  image,}
  
) {
    const item =[{images:"./like.png",alte:"like"},{images:"./comment.png",alte:"comment"},{images:"./share.png",alte:"share"},{images:"./save.png",alte:"save"},]
  return (
    <>
      <Box width={"542px"} height={"fit-content"} py={2} mb={5} bgColor={"white"} >
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
        <Text width={"50%"} my={5}>{message}</Text>
        {/* <Text width={"50%"}>{"message"}</Text> */}
        <Box
        width={"full"}
        // bgImage={image}
        bgColor={"gray"}
        height={"349px"}
        bgRepeat={"no-repeat"}
        bgSize={"contain"} mb={2}/>
        <Flex width={"192px"} height={"36px"}>
            {item.map((data,index)=><Image key={index} src={data.images} alt={data.alte}/>)}
        </Flex>
      </Box>
    </>
  );
}
