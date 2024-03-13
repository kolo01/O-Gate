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
  Heading,
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
  Select,
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
import toast, { Toaster } from "react-hot-toast";
import { getMessaging, getToken, onMessage } from "@firebase/messaging";
import { app } from "@/utils/firebase";

export default function Home() {
  const [message, setMessage] = useState([]);
  const [token, setToken] = useState("");
  const [max, setMax] = useState(300);
  const [min, setMin] = useState(0);

  const [sliderValue, setSliderValue] = useState([min,max]);

  const router = useRouter();
  const [checker, setChecker] = useState(false);


  const [token2,setToken2]= useState("")
const [notification, setNotification] = useState({title: '', body: ''});
  const notify = () => { toast(<ToastDisplay/>)};


  const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(getMessaging(app), (payload) => {
      console.log("payload", payload)
      resolve(payload);
      // router.replace(router.asPath)
    });
  });


  function ToastDisplay() {
    return (
   
        <Box  width={"full"}>
          <Text fontSize={"15px"} fontWeight={"bold"}>{notification?.title}</Text>
          <Text>
          {notification?.body}
          </Text>
        </Box>
      
    );
  };



  const requestForToken = () => {
    let config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const permission = Notification.requestPermission();
    if (permission== "granted") {
      return getToken(getMessaging(app), { vapidKey: "BFRmFZ3CsyZ2EF8rO78MDYieqCookk1exTmOL3u4OuvQyYhamK30HN9VqwTO3DN6q01l20Koxh49F5-YCi1PoTE" })
      .then( async (currentToken) => {
        if (currentToken) {
          console.log('current token for client: ', currentToken);
          // Perform any other neccessary action with the token
          setToken2(currentToken)
          await axios.post("http://185.98.139.246:9090/ogatemanagement-api/client/enregistrertoken",config,{token:currentToken})
          localStorage.setItem("item",currentToken)
        } else {
          // Show permission request UI
          console.log('No registration token available. Request permission to generate one.');
          setToken2("Okay")
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
    }else{
      // alert("SVP merci de bien vouloir activer les notifications");
      const permission = Notification.requestPermission();
      return getToken(getMessaging(app), { vapidKey: "BFRmFZ3CsyZ2EF8rO78MDYieqCookk1exTmOL3u4OuvQyYhamK30HN9VqwTO3DN6q01l20Koxh49F5-YCi1PoTE" })
      .then(async (currentToken) => {
        if (currentToken) {
          console.log('current token for client: ', currentToken);
          // Perform any other neccessary action with the token
          await axios.post("http://185.98.139.246:9090/ogatemanagement-api/client/enregistrertoken",{token:currentToken},config)
          setToken2(currentToken)
          localStorage.setItem("item",currentToken)
        } else {
          // Show permission request UI
          console.log('No registration token available. Request permission to generate one.');
          setToken2("Okay")
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });



    }
   
  };

  onMessageListener()
  .then((payload) => {
    setNotification({title: payload?.notification?.title, body: payload?.notification?.body});    
    router.replace(router.asPath) 
  })
  .catch((err) => console.log('failed: ', err));







  useEffect(() => {
    requestForToken()
    if (notification?.title ){
      notify()
     }
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
        <Toaster
  position="bottom-right"
  reverseOrder={false}
/>
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
              
              
                <SimpleGrid columns={2} p={5} spacing={5}> 
                  <Box>
                    <Flex>
                    
                    <Text fontSize={"16px"}   fontWeight={"bold"}>Type de poste</Text>
                    </Flex>
                    
                    <Select border={"1px solid black"} >
                      <option>Choisir un type</option>
                      <option>Information</option>
                      <option>Achat</option>
                      <option>Vente</option>
                      <option>Location</option>
                    </Select>
                  </Box>
                  <Box >
                    <Flex>
                 
                    <Text fontSize={"16px"} fontWeight={"bold"}>Type d{"'"}appartement</Text>
                    </Flex>
                   
                    <Select border={"1px solid black"} >
                      <option>Choisir un type</option>
                      <option>Studio</option>
                      <option>2 Pièces</option>
                      <option>3 Pièces</option>
                      <option> Duplex</option>
                      <option>Triplex</option>
                    </Select>
                  </Box>
                  <Box>
                    <Flex>
                   
                    <Text fontSize={"16px"} fontWeight={"bold"}>Meublé?</Text>
                    </Flex>
                    
                    <Select border={"1px solid black"} >
                      <option>Choisir un type</option>
                      <option>Oui</option>
                      <option>Non</option>                     
                    </Select>
                  </Box>
                  <Box  width={"100%"}>
                    <Flex>
                  
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
