import Navbar from "@/components/home/Navbar";
import Profilers from "@/components/src/AfterCo/profilsEtCo";
import { Avatar, Box, Center, Flex, Image, Input, Text, Textarea } from "@chakra-ui/react";


export default function Message() {
  return (
    <Box bgColor={"#F6F6F6"} pb={10}>
      <Navbar />
      <Flex mt={10}>
        <Box  mx={20}>
          <Profilers />
          <Box
            bgColor={"white"}
            mt={5}
            width={"240px"}
            height={"144px"}
            boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
            borderRadius={"25px"}
          >
            <Text fontWeight={700} fontSize={"25px"} p={2}>
              {" "}
              Relations actives{" "}
            </Text>
            <Box width={"full"} height={"1px"} bgColor={"#CDCDCD"} />
            <Flex p={2}>
              <Avatar w={"42px"} h={"42px"} mr={2} />
              <Box>
                <Text fontWeight={700}>Onomo franck</Text>
                <Flex>
                  <Box
                    w={4}
                    h={4}
                    bg="green.300"
                    border="2px solid white"
                    rounded="full"
                  />
                  <Text fontWeight={700} fontSize={"15px"}>
                    Actif
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Box bgColor={"white"} width={"542px"} borderRadius={"20px"} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}>
          <Flex p={2} ml={10}>
            <Avatar w={"42px"} h={"42px"} mr={2} />
            <Box>
              <Text fontWeight={700}>Onomo franck</Text>
              <Flex>
                <Box
                  w={4}
                  h={4}
                  bg="green.300"
                  border="2px solid white"
                  rounded="full"
                />
                <Text fontWeight={700} fontSize={"15px"}>
                  Actif
                </Text>
              </Flex>
            </Box>
          </Flex>
          <Box width={"full"} height={"1px"} bgColor={"#CDCDCD"} />
          <Box ml={10}>
            <Text color={"#D9D9D9"} fontWeight={700} fontSize={"15px"}>
              Envoyé le 12/10/2013
            </Text>
            <Box mt={2}>
              <Flex w={"full"}>
                <Avatar w={"42px"} h={"42px"} mr={2} />
                <Flex justifyContent={"space-between"} w={"80%"}>
                  <Text fontWeight={700} fontSize={"25px"}>
                    {" "}
                    Kouakou Serge
                  </Text>
                  <Text fontWeight={300} fontSize={"20px"}>
                    11h34
                  </Text>
                </Flex>
              </Flex>
              <Text ml={"50px"} w={"388px"} fontWeight={400} mt={-2}>Bonjour Mr Onomo, Je suis très intéressé par votre offre.</Text>
            </Box>
            <Box mt={2}>
              <Flex w={"full"}>
                <Avatar w={"42px"} h={"42px"} mr={2} />
                <Flex justifyContent={"space-between"} w={"80%"}>
                  <Text fontWeight={700} fontSize={"25px"}>
                    {" "}
                    Onomo Franck
                  </Text>
                  <Text fontWeight={300} fontSize={"20px"}>
                  15h45
                  </Text>
                </Flex>
              </Flex>
              <Text ml={"50px"} w={"388px"} fontWeight={400} mt={-2}>Bonsoir Mr Kouakou. Vous pouvez me contacter au 0584515492 pour plus d’informations</Text>
            </Box>
          </Box>
          <Center mt={20} mb={10} w={"494px"} display={"grid"}>
          <Textarea w={"494px"} ml={10} h={"106px"} type="text" placeholder="Entrez votre message" borderRadius={"15px"} bgColor={"#F1F1F1"} />
          <Flex justifyContent={"space-between"} mt={5}>
            <Flex ml={12}>
                <Image src="./imaged.png" w={"36px"} h={"36px"} alt="imaged"/>
                <Image src="./join.png" w={"36px"} h={"36px"} alt="join"/>
                <Image src="./emoji.png" w={"36px"} h={"36px"} alt="emoji"/>
                <Image src="./gif.png" w={"36px"} h={"36px"} alt="gif"/>
            </Flex>
            <Image src="./sender.png" w={"36px"} h={"36px"} alt="send"/>
          </Flex>
          </Center>
        </Box>
      </Flex>
    </Box>
  );
}
