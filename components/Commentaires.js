import { Button,useToast, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Textarea, useDisclosure } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'


function Commentaires({idM,propio}) {
    const toast = useToast();
    const [commented,setCommented] = useState("")
    let config = {
        headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("local")).data.accessToken}` },
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
              onClose()
            //   setCommentaire(commentaire + 1);a
          })
          .catch((error) => {});
      };

      const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
    <Flex>

<img width="25" height="25" src="https://img.icons8.com/ios/100/speech-bubble-with-dots--v1.png" alt="speech-bubble-with-dots--v1"/>
<Button onClick={onOpen} mt={2} fontSize={"18px"} fontWeight={500} bgColor={"transparent"} _hover={{bgColor:"transparent"}}>Commenter</Button>
    </Flex>
   
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
  )
}

export default Commentaires