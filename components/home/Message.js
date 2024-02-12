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
} from "@chakra-ui/react";
import axios from "axios";
import Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { MdMessage, MdSaveAlt } from "react-icons/md";
import { PiShareBold } from "react-icons/pi";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import secureLocalStorage from "react-secure-storage";
import { Viewer, Worker } from '@react-pdf-viewer/core';

export default function Messages(
  {
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
  favoris,all
}
) {

  const [commented, setCommented] = useState("");
  const [commentaire, setCommentaire] = useState(0);
  const [likes, setLikes] = useState(isliked);
  const [share, setShare] = useState();
  const [typed, setTyped] = useState("");
  const [interessed, setInteressed] = useState(isInteressed);
  const [follow, setFollow] = useState(isFav);
  const toast = useToast();

  const [token, setToken] = useState("");
  let config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  //fin des declarations

  useEffect(() => {
    if (image.length >0) {
      setTyped(image[0].typeFichier)
    } else{
      setTyped("IMAGES")
    }
    console.log(all)
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
  }, [token, idM, like, follow, interessed, isliked, isInteressed, isFav]);

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
        setFollow(isFav);
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

  const Comment = async (id) => {
    axios
      .post(
        `http://185.98.139.246:9090/ogatemanagement-api/client/enregistrercommentaire`,
        { "publicationId ": id, message: commented },
        config
      )
      .then((response) => {
        toast({
          title: "Succès",
          duration: 9000,
          status: "success",
          description: response.data.donnee,
        }),
          setCommented(""),
          onClose(),
          setCommentaire(commentaire + 1);
      })
      .catch((error) => {});
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const HandleDrawner = () => {
    onOpen();
  };
  return (
    <>
      <Box
        width={{ base: "400px", lg: "542px" }}
        height={"fit-content"}
        py={5}
        mb={5}
        color={"black"}
        bgColor={"white"}
        borderRadius={"2%"}
        overflow={"visible"}
        transition={"all 83ms"}
        boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
        p={2}
      >
        <Box
          width={"full"}
          // bgImage={image}
          // bgColor={"gray"}
          height={"400px"}
          bgRepeat={"no-repeat"}
          bgSize={"cover"}
        >
          {typed == "IMAGE" ?
          <Carousel
          interval={5000}
          showThumbs={false}
          showIndicators={false}
          autoPlay
          infiniteLoop
        >
          {image.map((images, index) => (
           
            <Image  key={index} width={'full'} height={'400px'} src={`http://185.98.139.246:9090/ogatemanagement-api/fichier/${images.id}`} alt={images.nom}/>
          ))}
        </Carousel> : typed == "VIDEO" ? 
           <Carousel
           interval={5000}
           showThumbs={false}
           showIndicators={false}
           autoPlay
           infiniteLoop
         >
           {image.map((images, index) => (
            
            <video controls  width={'full'} key={index}>


  <source src={`http://185.98.139.246:9090/ogatemanagement-api/fichier/${images.id}`} />


</video>

            
           ))}
         </Carousel> :   <Carousel
           interval={5000}
           showThumbs={false}
           showIndicators={false}
           
           infiniteLoop
         >
         {image.map((images, index) => (
          <Link download={true}  key={index} width={'full'} height={'400px'}
           href={`http://185.98.139.246:9090/ogatemanagement-api/fichier/${images.id}`}
          
            alt={images.id}>
            <Box  bgImage={"images/doc.jpg"} bgRepeat={"no-repeat"} width={'full'} height={'400px'}>
          
          <b>Telecharger {images.nom} </b>
            </Box>
            {/* <div style={{overflow:'scroll',height:600}}>
            <MobilePDFReader url="http://localhost:3000/test.pdf"/>
           </div> */}
            </Link>
          ))}
        </Carousel>
          }
          
        </Box>
        <Flex justifyContent={"space-between"}>
          <Flex mt={2} mb={2}>
            {/* <Avatar /> */}
            <Box>
              <Text fontWeight={700} fontSize={"20px"}>
                {propio}
              </Text>

              <Text fontWeight={"hairline"} fontSize={"15px"}>
                {date}
              </Text>
              {/* <Text fontWeight={"hairline"} color={"#D9D9D9"} fontSize={"12px"}>
                {"date"}
              </Text> */}
            </Box>
          </Flex>
          {interessed ? (
            <Button
              onClick={() => {
                Interesse(idM);
              }}
              bgColor={"white"}
              color={"#219EF9"}
              _hover={{
                bgColor: "white",
              }}
            >
              Désintéresser
            </Button>
          ) : (
            <Button
              onClick={() => {
                Interesse(idM);
              }}
              bgColor={"white"}
              color={"#219EF9"}
              _hover={{
                bgColor: "white",
              }}
            >
              intéresser
            </Button>
          )}
        </Flex>
        <Flex>
          <Box>
            <Text fontWeight={600} fontSize={"20px"}>
              {appart.designation},{ville}
            </Text>
            {message.length > 5 ? (
              <Text fontSize={"20px"} fontWeight={600} mb={5}>
                {message}
              </Text>
            ) : (
              <></>
            )}

           
          </Box>
        </Flex>

        {/* LES BUTTONS SOUS LA PUB */}
        <Flex
          width={"full"}
          height={"36px"}
          mt={2}
          pb={5}
          justifyContent={"space-between"}
          borderTop={"1px solid black"}
        >
          <Flex cursor={"pointer"} mr={2} mt={3} onClick={() => liked(idM)}>
            {like}
            {likes ? (
              <Image
                alt="like"
                color={"red"}
                src="./images/like-icon.svg"
                width={30}
                height={30}
                mt={-2}
                ml={2}
              />
            ) : (
              <Image
                width={30}
                height={30}
                mt={-2}
                ml={2}
                src="./images/liked.png"
                alt="not_liked"
              />
            )}
          </Flex>
          <Flex cursor={"pointer"} mr={2}  mt={2}>
            {commentaire}
            <MdMessage onClick={onOpen} size={30} />
          </Flex>
          <Flex cursor={"pointer"} mr={2}   mt={[1,1,1,2,2]}>
            0<PiShareBold size={30} />
          </Flex>
          <Flex cursor={"pointer"} mr={2}  mt={[1,1,1,2,2]} onClick={() => Favoris(idM)}>
            {favoris}{" "}
            {follow ? (
              <FcLike color="blue" colorRendering={"blue"} size={30} />
            ) : (
              <FcLikePlaceholder size={30}></FcLikePlaceholder>
            )}
          </Flex>
        </Flex>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Commenter la publication de {propio} </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb={2} fontWeight={600}>
              Message :{" "}
            </Text>
            <Textarea
              placeholder="Commentaires"
              onChange={(e) => setCommented(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              isDisabled={commented.length < 2}
              onClick={() => Comment(idM)}
            >
              Publier
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Fermer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
