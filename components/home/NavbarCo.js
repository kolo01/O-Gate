import { Flex, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import { FcSearch } from "react-icons/fc";
import Logo from "../src/Logo";
import ThreeSec from "./three";
import { Search2Icon } from "@chakra-ui/icons";

export default function NavbarCo(){
    return(
        <Flex bgColor={"whiteAlpha.700"} pb={5}>
         <Logo/>
         <InputGroup width={"335px"} height={"34px"} mt={5} ml={-5} mr={10}>
         <Input type="search"border={"1px solid black"}  />
         <InputRightElement  width={"25px"} mr={2}  as={Search2Icon}/>
         </InputGroup>
         <ThreeSec/>
        </Flex>
    )
}