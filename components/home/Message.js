import {
  Avatar,
  Box,
  Button,
  Flex,
  Image,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Center,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  Textarea,
  Img,
  SimpleGrid,
  Link,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Heading,
  AspectRatio,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import axios from "axios";
import Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { MdBed, MdMessage, MdOutlineBathroom, MdOutlineMessage, MdPerson, MdSaveAlt } from "react-icons/md";
import { PiHeart, PiShareBold, PiSwap, PiSwapFill } from "react-icons/pi";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import secureLocalStorage from "react-secure-storage";
import Slider from "react-slick";

import PhotoAlbum from "react-photo-album";
import Images from "./Affichages/Images";
import { IoMdSend } from "react-icons/io";
import Commentaires from "../Commentaires";


export default function Messages({
  idM,
  propio,
  date,
  message,
  image,
  appart,
  doc,
  init,
  prix,
  periodicite,
  ville,
  piece,
  chambre,
  salon,
  like,
  comment,
  isliked,
  isInteressed,
  isFav,
  favoris,
  all,
}) {
  const [commented, setCommented] = useState("");
  const [commentaire, setCommentaire] = useState(0);
  const [likes, setLikes] = useState(isliked);
  const [images, setImages] = useState([]);
  const [iLength, setILength] = useState(0);
  const [typed, setTyped] = useState("");
  const [interessed, setInteressed] = useState(isInteressed);
  const [follow, setFollow] = useState(isFav);
  const toast = useToast();

  const [token, setToken] = useState("");
  let config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  //fin des declarations


  const liked = async (id) => {
    axios
      .post(
        `http://185.98.139.246:9090/ogatemanagement-api/client/likerpublication/${id}`,
        { "publicationId ": id },
        config
      )
      .then((response) => {
        // toast({title:"Succès",duration:9000,status:"success",description:response.data.donnee})
      })
      .catch((error) => {});
  };

  const Favoris = async (id) => {
    axios
      .post(
        `http://185.98.139.246:9090/ogatemanagement-api/client/enregistrerfavoris/${id}`,
        { "publicationId ": id },
        config
      )
      .then((response) => {
        // toast({title:"Succès, favoris ajouté",duration:9000,status:"success",description:response.data.donnee})
        // ,
        // setFollow(!isFav);
      })
      .catch((error) => {});
  };

  const Interesse = async (id) => {
    axios
      .post(
        `http://185.98.139.246:9090/ogatemanagement-api/client/interesse/${id}`,
        { "publicationId ": id },
        config
      )
      .then((response) => {
        toast({
          title: "Succès, favoris ajouté",
          duration: 9000,
          status: "success",
          description: response.data.donnee,
        }),
          setInteressed(isInteressed);
      })
      .catch((error) => {});
  };



  const { isOpen, onOpen, onClose } = useDisclosure();

  const HandleDrawner = () => {
    onOpen();
  };

  const [index, setIndex] = useState(-1);



  useEffect(() => {
    if (image.length > 0) {
      if (image.length > 5) {
        setILength(image.length);
      } else {
        setILength(5);
      }
      setTyped(image[0].typeFichier);
    } else {
      setTyped("IMAGES");
    }

    setToken(JSON.parse(localStorage.getItem("local")).data.accessToken);
    let config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get(
        `http://185.98.139.246:9090/ogatemanagement-api/client/recherchercommentairesparpublication/${idM}`,
        { page: 0, taille: 10, publicationId: idM },
        config
      )
      .then((response) => {
        console.log("responseeee", response.data.donnee.publications);
      })
      .catch((error) => {});

    setLikes(isliked);
    setInteressed(isInteressed);
    setFollow(isFav);


    
  }, [
    token,
    idM,
    like,
    follow,
    interessed,
    isliked,
    isInteressed,
    isFav,
    all,
    image,
  ]);

  var settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
       <Box
      borderRadius={"25px"}
      my={5}
      
     
      boxShadow={"rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;"}
      w={"700px"}
    >
      <Box width={["450px", "450px", "500px", "650px", "650px"]} height={"400px"} mx={"3%"}>
      {/* <Images images={image} /> */}
      {console.log(image)}
      {image.length > 1 ?
        <Slider {...settings}>
        {image.map((data,index)=>{
             return (
             
                 
             <Image  key={index}  width={["450px", "450px", "500px", "650px", "650px"]} h={'400px'} src={`http://185.98.139.246:9090/ogatemanagement-api/fichier/${data.id}`} alt={`${data.nom}`} />
           
           )
            })} 
     </Slider>
     :
     
                 
     <Image  key={index}  width={["450px", "450px", "500px", "650px", "650px"]} h={'400px'} src={`http://185.98.139.246:9090/ogatemanagement-api/fichier/${image[0].id}`} alt={`${image[0].nom}`} />

      }
    
      </Box>
      <Box position={"relative"} w={"100%"} borderBottomRadius={"25px"} pb={5} bgColor={"white"}>
        <Box   ml={5}>
          <Text
          mt={-5}
          position={"absolute"}
            color={"white"}
            borderRadius={"md"}
            w={"fit-content"}
            fontSize={"20px"}
            fontWeight={600}
            px={2}
            py={2}
            bgColor={"blue.600"}
          >
           {appart.designation}
          </Text>
          <Box pt={10}>
          <Accordion  allowMultiple >
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box fontWeight={600} fontSize={"25px"} as="span" flex='1' textAlign='left'>
         Description
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel fontSize={"20px"} fontWeight={500} pb={4}>
    {message}
    </AccordionPanel>
  </AccordionItem>

 
</Accordion>
         
            <Text fontSize={"20px"} fontWeight={600}>
            Situé à {ville}
            </Text>
          </Box>
          <SimpleGrid spacingX={10} spacingY={10} columns={2} mt={2}>
            <Flex>
              <Heading>{prix} FCFA</Heading>
              <sup className="flottant"> / {periodicite}</sup>
            </Flex>
            <Flex>
              <MdPerson fontSize={"50px"} />
              <Flex>
                <Heading ml={5} fontSize={"35px"}>
                {piece}
                </Heading>
                <Text ml={5} fontSize={"25px"} fontWeight={400}>
                  Piéces
                </Text>
              </Flex>
            </Flex>

            <Flex>
              <MdBed fontSize={"50px"} />
              <Flex>
                <Heading ml={5} fontSize={"35px"}>
                  {chambre}
                </Heading>
                <Text ml={5} fontSize={"25px"} fontWeight={400}>
                  Chambres
                </Text>
              </Flex>
            </Flex>

            <Flex>
              <MdOutlineBathroom fontSize={"50px"} />
              <Flex>
                <Heading ml={5} fontSize={"35px"}>
                  {salon}
                </Heading>
                <Text ml={5} fontSize={"25px"} fontWeight={400}>
                  Salon(s)
                </Text>
              </Flex>
            </Flex>
          </SimpleGrid>
        </Box>
        <Flex mt={5} fontSize={" 20px"} justifyContent={"space-around"} borderY={"1px solid gray"} color={"gray"}>
            <Text>
             {like} Likes</Text>
          
          
          
          <Text>{favoris} Favoris</Text>


         
          <Text>{comment} Commentaire</Text>
         </Flex>
         <Flex mt={5} fontSize={" 20px"} justifyContent={"space-around"}  color={"blackAlpha.900"}>
            {
              isliked? <Flex onClick={()=>liked(idM)}>
                <img width="25" height="25" src="https://img.icons8.com/ios/100/facebook-like--v1.png" alt="facebook-like--v1"/> <Text mt={2} fontSize={"20px"} fontWeight={500}>Like</Text>
              </Flex> :<Flex onClick={()=>liked(idM)}>
              <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/000000/facebook-like.png" color="red" alt="facebook-like"/><Text mt={2} fontSize={"20px"} fontWeight={500}>Dislike</Text>
              </Flex>
            }
          
          
          
          
          {
              isFav? <Flex onClick={()=>Favoris(idM)}>
              <img width="25" height="25" src="https://img.icons8.com/ios/100/like--v1.png" alt="like--v1"/><Text mt={2} fontSize={"20px"} fontWeight={500}>Favoris</Text>
              </Flex> :<Flex onClick={()=>liked(idM)}>
              <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/like--v1.png" alt="like--v1"/><Text mt={2} fontSize={"20px"} fontWeight={500}>Annuler</Text>
              </Flex>
            }
          


         
          <Commentaires idM={idM} propio={propio}/>

          {
              isInteressed? <Flex onClick={()=>Favoris(idM)}>
              <img width="25" height="25" src="https://img.icons8.com/ios/100/add--v1.png" alt="add--v1"/><Text mt={2} fontSize={"20px"} fontWeight={500}>Interesser</Text>
              </Flex> :<Flex onClick={()=>liked(idM)}>
              <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/000000/add--v1.png" alt="add--v1"/><Text mt={2} fontSize={"20px"} fontWeight={600}>Desinteresser</Text>
              </Flex>
            }
         </Flex>
      </Box>
    </Box>

     
    </>
  );
}
