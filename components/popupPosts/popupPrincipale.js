import { Box, Button, Checkbox, CheckboxGroup, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure,SimpleGrid,Select,RadioGroup,Radio,useToast } from "@chakra-ui/react";
import { useState,useEffect } from "react";
import {useRouter} from "next/router"
import secureLocalStorage from "react-secure-storage";
import axios from "axios";
import Secondaire from "./Secondaire";
import {Select as Sl} from "react-dropdown-select";
import Dernier from "./quatrieme";

export default function PrincipalePopup() {
  const { isOpen, onOpen, onClose } = useDisclosure();

      ///variable pour Post

      const toast = useToast();
      const router = useRouter();
  const [token, setToken] = useState("");
      let config = {
        headers: { Authorization: `Bearer ${token}` },
      };
    

    ///Fonction des checkbox
   
    const CheckedDoc = (index,valeur,bool)=>{
      
      if(bool == true){
        checkedD[index] = valeur
       
            }else{
              checkedD[index] = ""
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
    const [TypePoste, setTypePoste] = useState("INFORMATION");
    const [checkedD,setCheckedD] = useState([])//utiliser pour recuperer les documents cochés
    const [checkedB,setCheckedB] = useState([])//utiliser pour recuperer les info additionelles sur les biens cochés
    const [needDoc,setNeedDoc] = useState(false)//utiliser pour recuperer les info addictionnelle sur le type de bien
    
    
    const [StypeBien, setStypeBien] = useState(1);
    const [meuble, setMeuble] = useState("NON_MEUBLE");
    //fin des declarations
      //fin des declarations
      useEffect(() => {
        setToken(JSON.parse(localStorage.getItem("local")).data.accessToken);
    
        let config = {
          headers: { Authorization: `Bearer ${token}` },
        };
        //Recuperation de la liste des type de bien
        axios
          .get(
            "http://185.98.139.246:9090/ogatemanagement-api/rechercherlistetypebiens",
            config
          )
          .then((response) =>{ setTypebienId(response.data.donnee),console.log("type bien id",(response.data.donnee))})
          .catch((error) => {});
        ///Recuperation des types de document
        axios
          .get(
            "http://185.98.139.246:9090/ogatemanagement-api/rechercherlistestypetypedocuments",
            config
          )
          .then((response) => setDocumentId(response.data.donnee))
          .catch((error) => {});
    
    
    
          //Info addition sur le bien
             
          axios.get('http://185.98.139.246:9090/ogatemanagement-api/rechercherlisteinformationsadditionnellessurbien',config).then((response)=>{setBienId(response.data.donnee),console.log("other",response.data.donneex)}).catch((error)=>{
           
        })
    
        ///info addition sur le quartier
        axios.get('http://185.98.139.246:9090/ogatemanagement-api/rechercherlisteinformationsadditionnellessurquartier',config).then((response)=>setQuartierId(response.data.donnee)).catch((error)=>{
            
        })
    
      }, [token]);

const handleSubmit = () =>{
  sessionStorage.setItem("typePoste",JSON.stringify(TypePoste))
  sessionStorage.setItem("meuble",JSON.stringify(meuble))
  sessionStorage.setItem("typeBien",JSON.stringify(parseInt(StypeBien)))
  sessionStorage.setItem("typeDocument",JSON.stringify(checkedD))
}


  return (
    <Box   fontSize={'12px'} fontFamily={"-apple-system"}>
      <Box
        onClick={onOpen}
        mt={5}
        mr={5}
        maxW={"107px"}
        maxH={"56px"}
        textAlign={"center"}
      
        cursor={"pointer"}
      >
        <Box ml={2}>
          <Image
            src={"./all/Sell.png"}
            alt=""
            width={"24px"}
            height={"24px"}
            fontSize={"24px"}
          />
        </Box>

        <Text fontSize={"12px"} lineHeight={"16px"}>
          {"Postes"}
        </Text>
      </Box>

      <Modal isOpen={isOpen} size={"5xl"} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Informations de base</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Box>
    
    <SimpleGrid columns={[1,1,2,2,2]} mt={2} spacingX={10} mx={5}>
    <Box  width={"100%"}>
      <Text>Type de postes</Text>
      <Select onChange={(e) => setTypePoste(e.target.value)}>
        <option value={"INFORMATION"}>INFORMATION</option>
        <option value={"VENTE"}>VENTE</option>
        <option value={"LOCATION"}>LOCATION</option>
        <option value={"LOCATION_VENTE"}>LOCATION-VENTE</option>
        {/* <option value={"MEDIA"}>MEDIA</option> */}
      </Select>
    </Box>
    {TypePoste == "INFORMATION"? <></>: <>
    <Box  width={"100%"}>
      <Box>
        <Text>Type de bien</Text>
        <Select onChange={(e) => {setStypeBien(e.target.value)}} >
          {typebienId.map((data, index) => (
            <option key={index}   value={parseInt(index+1)} >
              {data.designation}
            </option>
          ))}
        </Select>
      </Box>
    </Box>
    {parseInt(StypeBien)<3 ? (
      <>
        {StypeBien == "1" || StypeBien == "2" ? (
          <Box  mt={2}>
            <Text>Meublé?</Text>
            <RadioGroup onChange={(e) => setMeuble(e)}>
              <Radio value="MEUBLE" mr={5}>
                OUI
              </Radio>
              <Radio value="NON_MEUBLE">NON</Radio>
            </RadioGroup>
          </Box>
        ) : (
          <></>
        )}
      </>
    ) : (
      <></>
    )}
{/* 

{console.log(typeof(typebienId))}
{console.log("object",Object.values(typebienId)[parseInt(StypeBien)-1].documentIsAssocieted)} */}
      {Object.values(typebienId)[parseInt(StypeBien)-1].documentIsAssocieted ? <Box mt={2}>
          <Text  fontWeight={600}>Type de document</Text>
          <Box height={"fit-content"}  py={2} >
              
      
<Box width={"100%"} mt={1} spacing={2} >
  {/* <select class="js-example-basic-multiple" name="states[]" multiple="multiple">
      {documentId.map((data,index)=><option mr={2} key={index}
  //   isChecked={checkedItems[index]}
    onSelect={(e) => {CheckedDoc(index,data.id,e.target.checked)}}
    value={data.id}
  >
    {data.designation}
  </option>)}
  </select> */}
  
  <Sl   multi={true}   options={documentId} labelField="designation" valueField="id" />

 
</Box >
          </Box>
          </Box> : <></>} 


    
    </> }
    </SimpleGrid>
    </Box>
          </ModalBody>

          <ModalFooter>
            <Box onClick={()=>handleSubmit()}>
              {TypePoste == "INFORMATION" ? <Dernier/> : <Secondaire/>}
           
           </Box>
            <Button variant="ghost" onClick={onClose}>Fermer</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      
    </Box>
  );
}
