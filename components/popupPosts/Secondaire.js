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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Troisieme from "./troisieme";

export default function Secondaire() {
     ///Variable de recuperation des champs dans la base de donnée
  const [typebienId, setTypebienId] = useState([]);
  const [documentId, setDocumentId] = useState([]);
  const [quartierId, setQuartierId] = useState([]);
  const [bienId, setBienId] = useState([]);


  ///Fin de la recuperation



    ///variable pour Post
    const [TypePoste, setTypePoste] = useState("");
    const [nbPiece,SetNbPiece] = useState(0)
    const [nbChambre,SetNbChambre] = useState(0)
    const [nbSbain,SetNbSbain] = useState(0)
    const [nbSalon,SetNbSalon] = useState(0)
    const [prix,SetPrix] = useState(0)
    const [periodicite,SetPeriodicite ] = useState("JOUR")
    const [apportInit,SetApportInit ] = useState(0)

    
  
      const handle =()=>{
        setTypePoste(JSON.parse(sessionStorage.getItem("typePoste")))
      }

      const handleSubmit=()=>{
        sessionStorage.setItem("NPieces",JSON.stringify(nbPiece))
        sessionStorage.setItem("NChambre",JSON.stringify(nbChambre))
        sessionStorage.setItem("NBain",JSON.stringify(parseInt(nbSbain)))
        sessionStorage.setItem("NSalon",JSON.stringify(nbSalon))
        sessionStorage.setItem("Prix",JSON.stringify(prix))
        sessionStorage.setItem("Periodicite",JSON.stringify(periodicite))
        sessionStorage.setItem("Apport",JSON.stringify(apportInit))
      }
   
    useEffect(()=>{
      handle()
    })
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
          <ModalHeader>Informations sur le bien</ModalHeader>
          <ModalCloseButton />
          <ModalBody width={"100%"}>
            <SimpleGrid columns={[1, 1, 2, 2, 2]} mt={2}>
              <Box mt={2} width={"100%"}>
                <Text fontWeight={600}>N° de piéces</Text>
                <Input
                  type="number"
                  width={"80%"}
                  onChange={(e) => SetNbPiece(e.target.valueAsNumber)}
                  placeholder={"Nombre de piece"}
                />
              </Box>
              <Box mt={2} width={"100%"}>
                <Flex>
                  {" "}
                  <Text fontWeight={600}>N° de chambre</Text>{" "}
                 
                </Flex>
                <Input
                  type="number"
                  width={"80%"}
                  onChange={(e) => SetNbChambre(e.target.valueAsNumber)}
                  placeholder={"Nombre de chambre"}
                />
              </Box>
              <Box mt={2} width={"100%"}>
                <Flex>
                  {" "}
                  <Text fontWeight={600}>N° de salle de bain </Text>{" "}
                  {/* <Text fontSize={"15px"} color={"gray.400"}>
                    (optionnel)
                  </Text> */}
                </Flex>
                <Input
                  type="number"
                  width={"80%"}
                  onChange={(e) => SetNbSbain(e.target.valueAsNumber)}
                  placeholder={"Nombre de salle de bain "}
                />
              </Box>
              <Box ml={2} mt={2} width={"100%"}>
                <Flex>
                  {" "}
                  <Text fontWeight={600}>N° de salon </Text>{" "}
                  {/* <Text fontSize={"15px"} color={"gray.400"}>
                    (optionnel)
                  </Text> */}
                </Flex>
                <Input
                  type="number"
                  width={"80%"}
                  onChange={(e) => SetNbSalon(e.target.valueAsNumber)}
                  placeholder={"Nombre de salon "}
                />
              </Box>
              <Box width={"100%"}>
                <Flex>
                  {" "}
                  <Text fontWeight={600}>Prix </Text>{" "}
                </Flex>
                <Input
                  type="number"
                  width={"80%"}
                  onChange={(e) => SetPrix(e.target.valueAsNumber)}
                  placeholder={"Prix "}
                />
              </Box>
              <Box width={"100%"}>
                <Text fontWeight={600}>Periodicité de paiements</Text>
                <Select
                  width={"80%"}
                  onChange={(e) => SetPeriodicite(e.target.value)}
                >
                  <option value={"JOUR"}>Jour</option>

                  <option value={"MOIS"}>Mois</option>
                  <option value={"ANNEE"}>Année</option>
                </Select>
              </Box>
              {(TypePoste == "LOCATION" || TypePoste == "VENTE") ? (
                <Box mt={2} width={"100%"}>
                  <Text fontWeight={600}>Apport initial</Text>
                  <Input
                    type="number"
                    width={"80%"}
                    onChange={(e) => SetApportInit(e.target.valueAsNumber)}
                    placeholder="Apport initial"
                    maxLength={12}
                  />
                </Box>
              ) : (
                <></>
              )}
            </SimpleGrid>
          </ModalBody>

          <ModalFooter>
            <Box onClick={()=>handleSubmit()}>
           <Troisieme/>
           </Box>
            <Button variant="ghost" onClick={onClose}>Revenir</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
