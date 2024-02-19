import {
  AbsoluteCenter,
  Box,
  Button,
  Center,
  Divider,
  Input,
  Link,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import { useRouter } from "next/router";

export default function Box2() {
  const av = " l'aventure";
  const insc = " S'incrivant";
  const [email, setEmail] = useState("");
  const [clicked, setClicked] = useState(false);
  const [password, setPassword] = useState("");
  const toast = useToast();
  const router = useRouter();
  const handleConnect = async () => {
    setClicked(true);
    // toast({
    //     status:"success",duration: 9000,description:"Merci pour votre confiance",title:"Connexion Approuvé!"
    // })
    // router.push("/home")
    await axios
      .post("http://185.98.139.246:9090/ogatemanagement-api/signin", {
        username: email,
        password: password,
      })
      .then(async (response) => {
        // console.log(JSON.stringify(response))
        await localStorage.setItem("local", JSON.stringify(response));
        toast({
          status: "success",
          duration: 3000,
          description: "Merci pour votre confiance",
          title: "Connexion Approuvé!",
        });
        router.push("/home");
      })
      .catch((error) => {
        // console.log(error.response)
        setClicked(false);
        toast({
          status: "error",
          duration: 9000,
          description: "Merci de bien vouloir reesayer",
          title: "Mot de passe/Numéro incorrect",
        });
      });
  };
  return (
    <>
      <Center
      fontFamily={"-apple-system"}
      color={"black"}
        display={{ base: "block", lg: "none" }}
        ml={["5%", "25%", "25%", "0%", "0%"]}
        width={"full"}
      >
        <Box>
          <Text color={" #7a1317"} fontWeight={700} fontSize={"48px"}>
            Connexion
          </Text>
          <Box mt={5}>
            <Text fontWeight={700} fontSize={"16px"} lineHeight={"19.5px"}>
              Téléphone
            </Text>
            <Input
              borderRadius={"16px"}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              width={"408px"}
              height={"55px"}
              border={"1px solid black"}
            />
          </Box>
          <Box mt={5}>
            <Text fontWeight={700} fontSize={"16px"} lineHeight={"19.5px"}>
              Mot de passe
            </Text>
            <Input
              borderRadius={"16px"}
              width={"408px"}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type={"password"}
              height={"55px"}
              border={"1px solid black"}
            />
          </Box>
          <Text fontWeight={700} fontSize={"16px"} lineHeight={"19.5px"} mt={5}>
            {" "}
            Mot de passe oublié ?
          </Text>
          <Button
            mt={5}
            fontWeight={700}
            onClick={() => handleConnect()}
            isDisabled={email.length < 8 || password.length < 3}
            fontSize={"16px"}
            lineHeight={"19.5px"}
            borderRadius={"16px"}
            width={"408px"}
            height={"55px"}
            bgColor={"#7a1317"}
            color={"white"}
            _hover={{
              bgColor: "#7a1317",
            }}
            isLoading={clicked}
          >
            {" "}
            Se connecter
          </Button>
          <Button
            mt={5}
            bgColor="transparent"
            border="1px solid black"
            fontWeight={700}
            fontSize={"16px"}
            lineHeight={"19.5px"}
            borderRadius={"16px"}
            width={"408px"}
            height={"55px"}
            leftIcon={<FcGoogle />}
            _hover={{
              bgColor: "transparent",
            }}
          >
            {" "}
            Continuer avec Google
          </Button>
          <Box position='relative' py={10} width={"80%"}>
  <Divider color={"black"} bgColor={"black"} border={"1px solid black"}/>
  <AbsoluteCenter bg='white' px='4'>
    Ou
  </AbsoluteCenter>
</Box>
          <Button
            mt={5}
            bgColor="transparent"
            border="1px solid black"
            fontWeight={700}
            fontSize={"16px"}
            lineHeight={"19.5px"}
            borderRadius={"16px"}
            width={"408px"}
            height={"55px"}
            _hover={{
              bgColor: "transparent",
            }}
          >
            {" "}
            Démarrer{av} en{" "}
            <Text
              ml={2}
              color="#219EF9"
              as={Link}
              href={"/Inscription"}
              _hover={{ textDecoration: "none", color: "#219EF9" }}
            >
              {insc}
            </Text>{" "}
          </Button>
        </Box>
      </Center>
      <Box display={{ base: "none", lg: "block" }} fontFamily={"-apple-system"}>
        <Text color={" #7a1317"} fontWeight={700} fontSize={"48px"}>
          Connexion
        </Text>
        <Box mt={5}>
          <Text fontWeight={700} fontSize={"16px"} lineHeight={"19.5px"}>
            Téléphone
          </Text>
          <Input
            borderRadius={"16px"}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            width={"408px"}
            height={"55px"}
            border={"1px solid black"}
          />
        </Box>
        <Box mt={5}>
          <Text fontWeight={700} fontSize={"16px"} lineHeight={"19.5px"}>
            Mot de passe
          </Text>
          <Input
            borderRadius={"16px"}
            width={"408px"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type={"password"}
            height={"55px"}
            border={"1px solid black"}
          />
        </Box>
        <Text fontWeight={700} fontSize={"16px"} lineHeight={"19.5px"} mt={5}>
          {" "}
          Mot de passe oublié ?
        </Text>
        <Button
          mt={5}
          fontWeight={700}
          onClick={() => handleConnect()}
          isDisabled={email.length < 8 || password.length < 5}
          fontSize={"16px"}
          lineHeight={"19.5px"}
          borderRadius={"16px"}
          width={"408px"}
          height={"55px"}
          bgColor={"#7a1317"}
          color={"white"}
          _hover={{
            bgColor: "#7a1317",
          }}
          isLoading={clicked}
        >
          {" "}
          Se connecter
        </Button>
        <Box>
          <Button
            mt={5}
            bgColor="transparent"
            border="1px solid black"
            fontWeight={700}
            fontSize={"16px"}
            lineHeight={"19.5px"}
            borderRadius={"16px"}
            width={"408px"}
            height={"55px"}
            leftIcon={<FcGoogle />}
            _hover={{
              bgColor: "transparent",
            }}
          >
            {" "}
            Continuer avec Google
          </Button>
        </Box>
        <Box position="relative" padding="10">
          <Divider
            color={"black"}
            bgColor={"black"}
            border={"1px solid black"}
          />
          <AbsoluteCenter bg="white" px="4">
            Ou
          </AbsoluteCenter>
        </Box>

        <Box>
          <Button
            mt={5}
            bgColor="transparent"
            border="1px solid black"
            fontWeight={700}
            fontSize={"16px"}
            lineHeight={"19.5px"}
            borderRadius={"16px"}
            width={"408px"}
            height={"55px"}
            _hover={{
              bgColor: "transparent",
            }}
          >
            {" "}
            Démarrer{av} en{" "}
            <Text
              ml={2}
              color="#7a1317"
              as={Link}
              href={"/Inscription"}
              _hover={{ textDecoration: "none", color: "#7a1317" }}
            >
              {insc}
            </Text>{" "}
          </Button>
        </Box>
      </Box>
    </>
  );
}
