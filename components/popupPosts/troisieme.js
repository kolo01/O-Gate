import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    SimpleGrid,
    Box,
    Text,
    Input,
    Flex,
    Select,
    useDisclosure,
    Checkbox,
    Textarea,
  } from "@chakra-ui/react";
  import { useState } from "react";
import Dernier from "./quatrieme";
  
  export default function Troisieme() {
       ///Variable de recuperation des champs dans la base de donnée
    const [typebienId, setTypebienId] = useState([]);
    const [documentId, setDocumentId] = useState([]);
    const [quartierId, setQuartierId] = useState([]);
    const [bienId, setBienId] = useState([]);
  
  
    ///Fin de la recuperation
  
  
  
      ///variable pour Post
      const [TypePoste, setTypePoste] = useState("");
      const [checkedD,setCheckedD] = useState([1,1,1])//utiliser pour recuperer les documents cochés
      const [checkedB,setCheckedB] = useState([1,1,1])//utiliser pour recuperer les info additionelles sur les biens cochés
      const [checkedQ,setCheckedQ] = useState([1,1,1])//utiliser pour recuperer les info addictionnelle sur le quartier cochés
      const [nbPiece,SetNbPiece] = useState(0)
      const [nbChambre,SetNbChambre] = useState(0)
      const [nbSbain,SetNbSbain] = useState(0)
      const [nbSalon,SetNbSalon] = useState(0)
      const [prix,SetPrix] = useState(0)
      const [periodicite,SetPeriodicite ] = useState("jours")
      const [apportInit,SetApportInit ] = useState(0)
      const [doctype, setDocType] = useState("IMAGE");
      const [accepted, setAccepted] = useState("image/*");
      const [fichiers, setFichiers] = useState([]); //utiliser pour recuperer les images dans post et Besoin
      const [fichiersId, setFichiersId] = useState([]); //utiliser pour recuperer les id dans la bd
      const [OtherB,setOtherB] = useState("")
      const [OtherQ,setOtherQ] = useState("")
      const [lat,setLat] = useState(0)
      const [long,setLong] = useState(0)
      const [ville,setVille] = useState("none")
      const [desc,setDesc] = useState("none")
      
      const [StypeBien, setStypeBien] = useState("");
      const [meuble, setMeuble] = useState("NON DEFINI");
      //fin des declarations
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        <Button colorScheme="blue" mr={3} onClick={onOpen}>
          Suivant
        </Button>
        <Modal isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent width={"400px"} fontSize={["10px","10px","10px","15px","15px"]}>
            <ModalHeader>Informations additionelles</ModalHeader>
            <ModalCloseButton />
            <ModalBody width={"100%"}>
            <Box>
   
    
   <Box width={"300px"} ml={2} mt={2}>
         <Text  fontWeight={600}>Information additionnelle sur le bien</Text>
         <Box height={"fit-content"}  >
             
     
<SimpleGrid columns={[2,3,3,3,3]} mt={1} spacingX={10}  >
     {bienId.map((data,index)=><Checkbox  key={index}
 
   onChange={(e) => CheckedBien(index,data.id,e.target.checked)}
 >
   {data.designation}
 </Checkbox>)}
</SimpleGrid>

         </Box>
         </Box>
         <Box  width={"300px"} ml={2} mt={2}>
         <Text  fontWeight={600}> Autre information sur le bien</Text>
         <Textarea onChange={(e)=>{setOtherB(e.target.value)}}></Textarea>
         </Box>
         <Box width={"300px"} ml={2} mt={2}>
         <Text  fontWeight={600}>Information additionnelle sur le quartier</Text>
         <Box height={"fit-content"}  >
             
     
<SimpleGrid columns={[2,3,3,3,3]} mt={1} spacingX={"100px"} spacingY={2}  >
{quartierId.map((data,index)=><Checkbox mr={10} key={index}
 //   isChecked={checkedItems[index]}
   onChange={(e) => CheckedQuartier(index,data.id,e.target.checked)}
 >
   {data.designation}
 </Checkbox>)}
</SimpleGrid>

         </Box>
         </Box>
         <Box  width={"300px"} ml={2} mt={2}>
         <Text  fontWeight={600}> Autre information sur le quartier</Text>
         <Textarea onChange={(e)=>{setOtherQ(e.target.value)}}></Textarea>
         </Box>
   </Box>
            </ModalBody>
  
            <ModalFooter>
            <Dernier/>
              <Button variant="ghost" onClick={onClose}>Revenir</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
  