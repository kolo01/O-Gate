import { Avatar, Box, Button, Flex, Image, Text,  Drawer,
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
  Textarea, } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { FcLike } from "react-icons/fc";
import { MdMessage, MdSaveAlt } from "react-icons/md";
import { PiShareBold } from "react-icons/pi";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import secureLocalStorage from "react-secure-storage";

export default function Messages(
{  idM,
  propio,
  date,
  message,
  image,appart,
  doc,
  init,
  prix,
  periodicite,
  ville,piece,
  chambre,
  salon}
  
) {
  const Imaged = ["./images/P1.jpeg","./images/P2.jpeg","./images/P3.jpeg","./images/p4.jpeg"]
  const [commented,setCommented]=useState("")
  const [commentaire,setCommentaire]=useState(0)
  const [likes,setLikes]=useState(0)
  const [share,setShare]=useState(0)
  const [follow,setFollow]=useState(0)
const toast = useToast()
  
  const [token, setToken] = useState("");
  let config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  //fin des declarations
 
useEffect(() => {
    setToken(JSON.parse(secureLocalStorage.getItem("local")).data.accessToken);}
    ,[])


  const liked =async (id) => {
    axios
    .post(
      `http://185.98.139.246:9090/ogatemanagement-api/client/likerpublication/${id}`,{"publicationId ":id},config,

    )
    .then((response) =>{toast({title:"Succès",duration:9000,status:"success",description:response.data.donnee})})
    .catch((error) => {});
   
  }
  
  const Favoris =async (id) => {
    axios
    .post(
      `http://185.98.139.246:9090/ogatemanagement-api/client/enregistrerfavoris/${id}`,{"publicationId ":id},config,

    )
    .then((response) =>{toast({title:"Succès, favoris ajouté",duration:9000,status:"success",description:response.data.donnee})})
    .catch((error) => {});
   
  }

  const Interesse =async (id) => {
    axios
    .post(
      `http://185.98.139.246:9090/ogatemanagement-api/client/interesse/${id}`,{"publicationId ":id},config,

    )
    .then((response) =>{toast({title:"Succès, favoris ajouté",duration:9000,status:"success",description:response.data.donnee})})
    .catch((error) => {});
   
  }
  
  const Comment =async (id) => {
    axios
    .post(
      `http://185.98.139.246:9090/ogatemanagement-api/client/enregistrercommentaire`,{"publicationId ":id,"message":commented},config,

    )
    .then((response) =>{toast({title:"Succès",duration:9000,status:"success",description:response.data.donnee}),setCommented(""),onClose()})
    .catch((error) => {});
   
  }




  const { isOpen, onOpen, onClose } = useDisclosure()
    const item =[{images:"./like.png",alte:"like"},{images:"./comment.png",alte:"comment"},{images:"./share.png",alte:"share"},{images:"./save.png",alte:"save"},]
    const HandleDrawner=()=>{
      onOpen()
    }
  return (
    <>
      <Box width={{base:"400px",lg:"542px"}} height={"fit-content"} py={5} mb={5} bgColor={"white"} borderRadius={25} p={5} >
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
          onClick={()=>{Interesse(idM)}}
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
        <Box ml={5}>
        <Flex>
            <Flex mr={5}>
            <Text mr={2} fontWeight={600}>Ville : </Text>
            <Text>{ville}</Text>
            </Flex>
            <Flex>
            <Text mr={2} fontWeight={600}>Prix : </Text>
            <Text>{prix}</Text>
          </Flex>
          </Flex>
          <Flex>
          <Flex mr={5}>
            <Text mr={2} fontWeight={600}>Type : </Text>
            <Text>{appart.designation}</Text>
          </Flex>
          <Flex>
            <Text mr={2} fontWeight={600}>Apport initial : </Text>
            <Text>{init}</Text>
          </Flex>
          </Flex>        
          <Flex>
          <Flex mr={5}>
            <Text mr={2} fontWeight={600}>Periodicité : </Text>
            <Text>{periodicite}</Text>
          </Flex>
          <Flex>
            <Text mr={2} fontWeight={600}>N° Pièces : </Text>
            <Text>{piece}</Text>
          </Flex>
          </Flex>
          <Flex>
          <Flex mr={5}>
            <Text mr={2} fontWeight={600}>N° Chambre : </Text>
            <Text>{chambre}</Text>
          </Flex>
          <Flex>
            <Text mr={2} fontWeight={600}>N° Salon : </Text>
            <Text>{salon}</Text>
          </Flex>
          </Flex>
        </Box>
        </Flex>
        <Box
        width={"full"}
        // bgImage={image}
        // bgColor={"gray"}
        height={"349px"}
        bgRepeat={"no-repeat"}
        bgSize={"contain"}
         mb={2}>
          <Carousel autoPlay infiniteLoop>
            {image.map((images,index)=><Box key={index} width="full"
              height={"349px"}
              bgRepeat={"no-repeat"}
              bgSize={"contain"}
        bgImage={images}
              
            />)}
          </Carousel>
        </Box>
        {/* LES BUTTONS SOUS LA PUB */}
        <Flex width={"192px"} height={"36px"}>
          <Flex cursor={"pointer"}mr={2} onClick={()=>liked(idM)}><FcLike size={30}/></Flex>
          <Flex cursor={"pointer"}mr={2}><MdMessage onClick={onOpen} size={30}/></Flex>
          <Flex cursor={"pointer"}mr={2}><PiShareBold size={30}/></Flex>
          <Flex cursor={"pointer"}mr={2} onClick={()=>Favoris(idM)}><MdSaveAlt size={30}/></Flex>
        </Flex>
      </Box>


      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Commenter la publication de {propio} </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           <Text mb={2} fontWeight={600}>Message : </Text>
           <Textarea placeholder="Commentaires"  onChange={(e)=>setCommented(e.target.value)}/>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} isDisabled={commented.length<2} onClick={()=>Comment(idM)} >
              Publier
            </Button>
            <Button variant='ghost' onClick={onClose}>Fermer</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
