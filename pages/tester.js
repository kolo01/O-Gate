import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Input,
  Select,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MdBathroom, MdBed, MdOutlineBathroom, MdPerson } from "react-icons/md";

const FileUploadForm = () => {
  const [fields, setFields] = useState([
    { id: 1, fileType: "", selectedFile: null },
  ]);

  const handleAddField = () => {
    const newId = fields.length + 1;
    setFields([...fields, { id: newId, fileType: "", selectedFile: null }]);
    console.log(fields);
  };

  const handleRemoveFields = (id) => {
    if (fields.length === 1) return; // Ne supprime pas le dernier champ
    const updatedFields = fields.filter((field) => field.id !== id);
    setFields(updatedFields);
    console.log(fields);
  };

  const getFileAcceptType = (fileType) => {
    switch (fileType) {
      case "IMAGE":
        return "image/*";
      case "DOCUMENT":
        return ".doc,.docx,.pdf,.ods,.odt,.odf";
      case "VIDEO":
        return "video/*";
      default:
        return "";
    }
  };

  const handleFileTypeChange = (event, id) => {
    const updatedFields = fields.map((field) => {
      if (field.id === id) {
        return { ...field, fileType: event.target.value };
      }
      return field;
    });
    setFields(updatedFields);
    console.log(fields);
  };

  const handleFileChange = (event, id) => {
    const updatedFields = fields.map((field) => {
      if (field.id === id) {
        return { ...field, selectedFile: event.target.files };
      }
      return field;
    });
    setFields(updatedFields);
    console.log(fields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Vous pouvez traiter l'envoi de fichier ici
    console.log("Champs de fichier:", fields);
  };

  return (
    <Box
      borderRadius={"25px"}
      bgColor={"red"}
      pb={5}
     
      boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
      w={"fit-content"}
    >
      <Box>
        <img
          className="ImgBorder"
          src={"./images/P2.jpeg"}
          width={"100%"}
          height={"50px"}
        />
      </Box>
      <Box position={"relative"}>
        <Box mt={-4} ml={5}>
          <Text
            color={"white"}
            borderRadius={"md"}
            w={"fit-content"}
            fontSize={"20px"}
            fontWeight={600}
            px={2}
            py={2}
            bgColor={"blue.600"}
          >
            Logement entier
          </Text>
          <Box mt={2}>
            <Heading fontWeight={700}>Villa Moorings</Heading>
            <Text fontSize={"16px"} fontWeight={200}>
              Saint-Malo, Bretagne, France
            </Text>
          </Box>
          <SimpleGrid spacingX={10} spacingY={10} columns={2} mt={2}>
            <Flex>
              <Heading>2000000 FCFA </Heading>
              <sup className="flottant"> / MOIS</sup>
            </Flex>
            <Flex>
              <MdPerson fontSize={"50px"} />
              <Flex>
                <Heading ml={5} fontSize={"35px"}>
                  6
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
                  2
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
                  2
                </Heading>
                <Text ml={5} fontSize={"25px"} fontWeight={400}>
                  Salles de Bain
                </Text>
              </Flex>
            </Flex>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default FileUploadForm;
