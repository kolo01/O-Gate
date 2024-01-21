import { ArrowRightIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";

export default function Suggestion() {
  const [nom, setNom] = useState("");
  const router = useRouter();
  useEffect(() => {
    try {
      if (JSON.parse(localStorage.getItem("local")).data.nom == "NON DEFINI") {
        setNom("NON DEFINI");
      } else {
        setNom(JSON.parse(localStorage.getItem("local")).data.nom);
      }
    } catch (error) {
      router.push("/");
    }
  }, [nom, router]);
  return (
    <Box
      borderRadius={"5%"}
      py={5}
      width={"250px"}
      height={"fit-content"}
      display={{ base: "none", lg: "grid" }}
      boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
    >
      <Box>
        <Text fontWeight={700} fontSize={"16px"} ml={2} mb={5} width={"240px"}>
          Vous pourriez être interessé
        </Text>
        <Box width={"220px"} ml={5}>
          <Flex fontSize={"12px"} display={"grid"} mb={2} justifyContent={"space-between"}>
            <Flex>
              <Text ml={2} fontWeight={700}>Terrain de 500 m<sup>2</sup></Text>
            </Flex>
            <Text ml={2} fontWeight={700}>700.000</Text>
            <Button color={"#219EF9"}>Voir publication</Button>
          </Flex>
          <Flex fontSize={"12px"} display={"grid"} mb={2} justifyContent={"space-between"}>
            <Flex>
              <Text ml={2} fontWeight={700}>Duplex en location à Angré </Text>
            </Flex>
            <Text ml={2} fontWeight={700}>200.000</Text>
            <Button color={"#219EF9"}>Voir publication</Button>
          </Flex>
          <Flex fontSize={"12px"} display={"grid"} mb={2} justifyContent={"space-between"}>
            <Flex>
              <Text ml={2} fontWeight={700}>Habitation a vendre 12 pièces </Text>
            </Flex>
            <Text ml={2} fontWeight={700}>5.000.000</Text>
            <Button color={"#219EF9"}>Voir publication</Button>
          </Flex>
        </Box>
      </Box>
      <Center>
        <Button
          
          className="button-64"
          // rightIcon={<ArrowRightIcon />}
          
        >
          <span>
          Toutes les suggestions
          </span>
        </Button>
      </Center>
    </Box>
  );
}
