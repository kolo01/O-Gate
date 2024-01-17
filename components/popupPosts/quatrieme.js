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
import axios from "axios";
  import { useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";
  
  export default function Dernier() {
    const { isOpen, onOpen, onClose } = useDisclosure();
     //variable globale
     const toast = useToast();
    
   
     //fin des variables globales
   
 
     const [token, setToken] = useState("");
     let config = {
       headers: { Authorization: `Bearer ${token}` },
     };
  
     //fin des declarations
   
   
   
   
   
     ///Fonction des checkbox
    
     const CheckedDoc = (index,valeur,bool)=>{
       
       if(bool == true){
         checkedD[index] = valeur
        
             }else{
               checkedD[index] = ""
             }
           }
     const CheckedBien = (index,valeur,bool)=>{
       
       if(bool == true){
         checkedB[index] = valeur
        
             }else{
               checkedB[index] = ""
             }
           }
   const CheckedQuartier = (index,valeur,bool)=>{
     if(bool == true){
 checkedQ[index] = valeur
 
     }else{
       checkedQ[index] = ""
     }
       
   }
     ///fin des declarations
   
   ///Variable de recuperation des champs dans la base de donnée
   const [typebienId, setTypebienId] = useState([]);
   const [documentId, setDocumentId] = useState([]);
   const [quartierId, setQuartierId] = useState([]);
   const [bienId, setBienId] = useState([]);
 
 
   ///Fin de la recuperation
 
 
 
     ///variable pour Post
     const [TypePoste, setTypePoste] = useState("");
     const [checkedD,setCheckedD] = useState([])//utiliser pour recuperer les documents cochés
     const [checkedB,setCheckedB] = useState([])//utiliser pour recuperer les info additionelles sur les biens cochés
     const [checkedQ,setCheckedQ] = useState([])//utiliser pour recuperer les info addictionnelle sur le quartier cochés
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
     
     const [StypeBien, setStypeBien] = useState(0);
     const [meuble, setMeuble] = useState("NON DEFINI");
     //fin des declarations
     const [displayed1, setDisplayed1] = useState("block");
     const [displayed2, setDisplayed2] = useState("none");

     //variable pour Besoin
     //fin des declarations
    
   
     //Fonction d'envoi basé sur le modele
   
     
     const HandleMedia =  (doctype,fichiers) => {
       setDisplayed1("none")
       setDisplayed2("block")
       fichiers.map(async (data,index)=>{
         
        Object.values(data).map(async (donnees,index)=>{
         let formdata = new FormData()       
         formdata.append( "fichier",donnees);
         formdata.append("typeFichier" , doctype)
         await axios.post("http://185.98.139.246:9090/ogatemanagement-api/ajouterfichier",formdata
         ,config).then((response)=>{console.log(response.data.donnee.id),fichiersId.push(response.data.donnee.id)})
         })
       })
     };
 
     const SavePost = async ()=>{
        // HandleMedia(doctype, fichiers)
        await axios.post("http://185.98.139.246:9090/ogatemanagement-api/client/enregistrerpublicationaveclistefichier",{
         apportInitial: JSON.parse(sessionStorage.getItem("Apport")),
         autreInfoSurBien:JSON.parse(sessionStorage.getItem("OAddBien")),
         autreInfoSurQuartier: JSON.parse(sessionStorage.getItem("OAddQuart")),
         description: desc,
         fichierIds: fichiersId,
         
         informationAdditionnelleSurBienIds:JSON.parse(sessionStorage.getItem("IAddBien")),
         informationAdditionnelleSurQuartierIds: JSON.parse(sessionStorage.getItem("IAddQuart")),
         latitude: lat,
         localisation: ville,
         longitude: long,
         nombreChambres: JSON.parse(sessionStorage.getItem("NChambre")),
         nombrePieces: JSON.parse(sessionStorage.getItem("NPieces")),
         nombreSalon: JSON.parse(sessionStorage.getItem("NSalon")),
         periodicite:JSON.parse(sessionStorage.getItem("Periodicite")),
         prix: JSON.parse(sessionStorage.getItem("Prix")),
         typeAppartement: JSON.parse(sessionStorage.getItem("meuble")),
         typeBienId: JSON.parse(sessionStorage.getItem("typeBien")),
         typeDocumentIds: JSON.parse(sessionStorage.getItem("typeDocument")),
         typeFichier: doctype,
         typePost: JSON.parse(sessionStorage.getItem("typePoste")),
         typeRequete: "EXPRESSION_BESOIN"
 
        },config).then((response)=>{
         toast({
           title:"Poste Sauvegardé",status:"success",description:"votre poste à bien été enregistré",duration:7000
         })
        }).catch((error)=>{
         console.log(error),
         toast({
           title:"Erreur lors de l'enregistrement",status:"error",description:"Veuillez réesayer svp!!!",duration:7000
         })
        })
     }
 
     const handleDocType = (targeted)=>{
       setDocType(targeted)
       if(targeted == "VIDEO"){
         setAccepted("video/*")
       }else if(targeted == "DOCUMENT"){
         setAccepted(".doc,.docx,.pdf,.ods,.odt,.odf")
       }else(setAccepted("image/*"))
     }
   
     useEffect(() => {
      setToken(JSON.parse(localStorage.getItem("local")).data.accessToken);
  
    
      //Recuperation de la liste des type de bien
     
  
    }, [token]);
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
            <SimpleGrid columns={1} spacingX={20}>
      
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
              <Button colorScheme="blue" mr={3} display={displayed1} onClick={()=>{HandleMedia(doctype, fichiers)}}>
                Terminer
              </Button>
              <Button colorScheme="green" display={displayed2} mr={3} onClick={()=>{SavePost()}}>
                Confirmer
              </Button>
              <Button variant="ghost" onClick={onClose}>Revenir</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
  