import Messages from "@/components/home/Message";

import Navbar from "@/components/home/Navbar";
import NavbarCo from "@/components/home/NavbarCo";
import Stats from "@/components/src/AfterCo/Stats";
import Profilers from "@/components/src/AfterCo/profilsEtCo";
import Suggestion from "@/components/src/AfterCo/suggestion";
import Logo from "@/components/src/Logo";
import { Search2Icon } from "@chakra-ui/icons";
import {
  AspectRatio,
  Avatar,
  Box,
  Center,
  Flex,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  SimpleGrid,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";
import { useStyleRegistry } from "styled-jsx";
import MyComponent from "./testMap";
import { MdGraphicEq } from "react-icons/md";

export default function Home() {
  const [message, setMessage] = useState([]);
  const [token, setToken] = useState("");
  const [sliderValue, setSliderValue] = useState([0,0]);

  const [nom, setNom] = useState("");
  const all = [
    {
      image: "./all/Home.png",
      text: "Accueil",
      l: 2,
      link: "/home",
    },

    {
      image: "./all/partenaire.png",
      text: "Mes relations",
      l: 5,
      link: "/relation",
    },
    {
      image: "./all/notifications.png",
      text: "Notifications",
      l: 10,
      link: "/notifications",
    },
    ,
    {
      image: "./all/mesasge.png",
      text: "Messagerie",
      l: 10,
      link: "/messages",
    },
  ];
  const router = useRouter();
  const [checker, setChecker] = useState(false);

  useEffect(() => {
    try {
      // console.log(localStorage.getItem("local"))
      if (
        JSON.parse(localStorage.getItem("local")).data.accessToken.length > 10
      ) {
        setChecker(true);
        setToken(JSON.parse(localStorage.getItem("local")).data.accessToken);

        let config = {
          headers: { Authorization: `Bearer ${token}` },
        };

        axios
          .get(
            "http://185.98.139.246:9090/ogatemanagement-api/client/rechercherpublicationparpage?page=0&taille=10",
            config
          )
          .then((response) => {
            setMessage(response.data.donnee.publications);
          })
          .catch((error) => {});
      } else {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      // router.push("/")
    }
  }, [router, token]);
  if (checker) {
    return (
      <Box bgColor={"#f3f3f3 "} mb={10}>
        <NavbarCo />
        <Center>
          <Flex mt={5} pb={10}>
            <Box
              mr={5}
              display={["none", "none", "none", "block", "block"]}
              height={"fit-content"}
            >
              <Profilers />
            </Box>

            <Box mr={5}>
              <Box bgColor={"whiteAlpha.600"} mb={2} fontFamily={'-apple-system'}>
                <Flex>
                <img width="30" height="30" src="https://img.icons8.com/arcade/64/generic-sorting.png" alt="generic-sorting"/>
                <Text  fontWeight={"bold"}>Filtres</Text>
                </Flex>
              
                <SimpleGrid columns={2} p={5} spacing={5}> 
                  <Box>
                    <Flex>
                    <img width="24" height="24" src="https://img.icons8.com/cute-clipart/64/bookmark.png" alt="bookmark"/>
                    <Text fontSize={"16px"}   fontWeight={"bold"}>Type de poste</Text>
                    </Flex>
                    
                    <select >
                      <option>Choisir un type</option>
                      <option>Information</option>
                      <option>Achat</option>
                      <option>Vente</option>
                      <option>Location</option>
                    </select>
                  </Box>
                  <Box >
                    <Flex>
                    <img width="24" height="24" src="https://img.icons8.com/fluency/48/city-buildings.png" alt="city-buildings"/>
                    <Text fontSize={"16px"} fontWeight={"bold"}>Type d{"'"}appartement</Text>
                    </Flex>
                   
                    <select >
                      <option>Choisir un type</option>
                      <option>Studio</option>
                      <option>2 Pièces</option>
                      <option>3 Pièces</option>
                      <option> Duplex</option>
                      <option>Triplex</option>
                    </select>
                  </Box>
                  <Box>
                    <Flex>
                    <img width="24" height="24" src="https://img.icons8.com/color-glass/48/furniture.png" alt="furniture"/>
                    <Text fontSize={"16px"} fontWeight={"bold"}>Meublé?</Text>
                    </Flex>
                    
                    <select >
                      <option>Choisir un type</option>
                      <option>Oui</option>
                      <option>Non</option>                     
                    </select>
                  </Box>
                  <Box  width={"100%"}>
                    <Flex>
                    <img width="24" height="24" src="https://img.icons8.com/nolan/64/cash--v1.png" alt="cash--v1"/>
                    <Text fontSize={"16px"} fontWeight={"bold"}>Prix</Text>
                    </Flex>
                    
                    <RangeSlider aria-label={['min', 'max']} max={300} defaultValue={[0, 300]} onChange={(val)=>setSliderValue(val)}>
  <RangeSliderTrack bg='red.100'>
    <RangeSliderFilledTrack bg='tomato' />
  </RangeSliderTrack>
  <RangeSliderThumb boxSize={6} index={0}>
    <Box color='tomato' as={MdGraphicEq} />
  </RangeSliderThumb>
  {/* <RangeSliderThumb boxSize={6} index={1}>
    <Box color='tomato' as={MdGraphicEq} />
  </RangeSliderThumb> */}
  <Tooltip
        hasArrow
        bg='teal.500'
        color='white'
        placement='top'
        isOpen={true}
        label={`${sliderValue}`}
      >
        <RangeSliderThumb  index={1}/>
      </Tooltip>
</RangeSlider>
                  </Box>
                </SimpleGrid>
              </Box>
              {message.length > 0 ? (
                <>
                  {" "}
                  <Box  bgColor={"white"} p={2} borderRadius={"xl"}>
                    {/* <AspectRatio ratio={16 / 9} mb={10} bgColor={"white"} borderRadius={25}>
                      <iframe
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src={
                          "https://www.google.com/maps/embed/v1/place?key=AIzaSyAoJQLE8uAbWnyPHCv-_udEUhH7HQooJlM&q={'DEUX PLATEAUX BLD LATRILLE ','angre 8eme tranche'}"
                        }
                      ></iframe>
                    </AspectRatio> */}
                    <MyComponent/>
                  </Box>
                  {message.map((data, ind) => (
                    <Box key={ind} >
                      <Messages
                        like={data.nombrelike}
                        isliked={data.isLiked}
                        isInteressed={data.isInteresse}
                        isFav={data.isFavoris}
                        comment={data.nombrecommentaire}
                        favoris={data.nombrefavoris}
                        idM={data.id}
                        propio={data.Client}
                        date={data.datePublication}
                        image={data.fichiers}
                        message={data.description}
                        appart={data.typeBien}
                        doc={data.typeDocuments}
                        init={data.apportInitial}
                        prix={data.prix}
                        periodicite={data.periodicite}
                        ville={data.localisation}
                        piece={data.nombrePieces}
                        chambre={data.nombreChambres}
                        salon={data.nombreSalon}
                        all = {data}
                      />
                    </Box>
                  ))}{" "}
                </>
              ) : (
                <AspectRatio
                bgColor={"white"}
                  width={{ base: "400px", lg: "542px" }}
                  ratio={16 / 9}
                  mb={10}
                  borderRadius={25}
                >
                  <iframe
                 
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={
                      "https://www.google.com/maps/embed/v1/place?key=AIzaSyAoJQLE8uAbWnyPHCv-_udEUhH7HQooJlM&q={'DEUX PLATEAUX BLD LATRILLE ','angre 8eme tranche'}"
                    }
                  ></iframe>
                </AspectRatio>
              )}
            </Box>
            <Box display={["none", "none", "none", "grid", "grid"]}>
              <Suggestion />
            </Box>
          </Flex>
        </Center>
      </Box>
    );
  }
}
