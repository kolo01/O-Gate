import { Flex, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import { FcSearch } from "react-icons/fc";
import Logo from "../src/Logo";
import ThreeSec from "./three";

export default function NavbarCo(){
    return(
        <Flex>
         <Logo/>
         <InputGroup width={"335px"} height={"34px"} mt={5} ml={-5} mr={10}>
         <Input type="search"border={"1px solid black"}  />
         <InputRightElement as={FcSearch}/>
         </InputGroup>
         <ThreeSec/>
        </Flex>
    )
}