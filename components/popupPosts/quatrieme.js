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
    useToast,
    Textarea,
  } from "@chakra-ui/react";
  import { useState } from "react";
  
  export default function Dernier() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast()
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
      const handleSubmit = () => {
        toast({
            title:"Succés",duration:9000,description:"Enregistrement effectué",status:"success"
        })
     
      }
      //fin des declarations

    return (
      <>
        <Button colorScheme="blue" mr={3} onClick={onOpen}>
          Suivant
        </Button>
        <Modal isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent width={"400px"} fontSize={["10px","10px","10px","15px","15px"]}>
            <ModalHeader>Generalité et Document(s)</ModalHeader>
            <ModalCloseButton />
            <ModalBody width={"100%"}>
            <SimpleGrid columns={[1,1,1,2,2]} spacingX={20}>
      
      <Box width={"300px"}  mt={2}>
            <Text  fontWeight={600} >Image(s)</Text>
          <Select onChange={(e)=>{handleDocType(e.target.value)}}>
            <option value={"IMAGE"}>IMAGE</option>
            <option value={"DOCUMENT"}>DOCUMENT</option>
            <option value={"VIDEO"}>VIDEO</option>
          </Select>
            </Box> 
            <Box width={"300px"}  mt={2}>
            <Text  fontWeight={600} >Image(s)</Text>
            <Input type='file' accept={`${accepted}`} multiple={true} onChange={(e)=>setFichiers([e.target.files])} />
            </Box> 
            <Box width={"300px"}  mt={2}>
            <Text  fontWeight={600}>Latitude</Text>
            <Input type='number' placeholder="latitude" onChange={(e)=>setLat(e.target.valueAsNumber)} />
            </Box> 
            <Box width={"300px"} mt={2}>
            <Text  fontWeight={600} >Longitude</Text>
            <Input type='number'  placeholder="Longitude" onChange={(e)=>setLong(e.target.valueAsNumber)} />
            </Box> 
            <Box width={"300px"} mt={2}>
            <Text  fontWeight={600} >Localisation(Ville)</Text>
            <Input type='text'  placeholder=" Ville" onChange={(e)=>{setVille(e.target.value)}}/>
            </Box> 
            <Box >
            <Text  fontWeight={600}>Description</Text>
            <Textarea  width={"90%"} onChange={(e)=>{setDesc(e.target.value)}} height={"150px"} />
            </Box>
          
      </SimpleGrid>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={()=>{handleSubmit()}}>
                Terminer
              </Button>
              <Button variant="ghost" onClick={onClose}>Revenir</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
  