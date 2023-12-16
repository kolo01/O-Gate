import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Input, InputGroup, InputLeftElement, InputRightElement, useDisclosure } from "@chakra-ui/react";
import { FcSearch } from "react-icons/fc";
import Logo from "../src/Logo";
import ThreeSec from "./three";
import { Search2Icon } from "@chakra-ui/icons";
import ThreeSecM from "./threeM";

export default function NavbarCo(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
        <>
        <Flex display={{base:"none", lg: "flex"}} bgColor={"whiteAlpha.700"} pb={5}>
         <Logo/>
         <InputGroup width={"335px"} height={"34px"} mt={5} ml={-5} mr={10}>
         <Input type="search"border={"1px solid black"}  />
         <InputRightElement  width={"25px"} mr={2}  as={Search2Icon}/>
         </InputGroup>
         <ThreeSec/>
        </Flex>
        <Flex  display={{base:"flex", lg: "none"}}>
            <Logo/>
            <InputGroup width={"335px"} height={"34px"} mt={5} ml={-5} mr={10}>
         <Input type="search"border={"1px solid black"}  />
         <InputRightElement  width={"25px"} mr={2}  as={Search2Icon}/>
         </InputGroup>
             <Button  mt={5} colorScheme='blue' onClick={onOpen}>
        Menu
      </Button>
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Menu</DrawerHeader>
          <DrawerBody>
            <ThreeSecM/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
        </Flex>
        </>
    )
}