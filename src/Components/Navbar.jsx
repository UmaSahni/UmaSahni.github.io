import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box  >
      <Flex
        bg="gray.100"
        w="100%"
        px={4}
        py={4}
        align="center"
        justify="space-between"
        position="fixed"
       
        top="0"
        zIndex="100"
      >
        <Box  paddingLeft={"10"} fontWeight="bold" fontSize="xl">
          Uma Sahni
        </Box>
        <IconButton
          aria-label="Open menu"
          display={{ base: "block", md: "none" }}
          onClick={onOpen}
          icon={<HamburgerIcon />}
        />
        <HStack
          as="nav"
          spacing={4}
          display={{ base: "none", md: "flex" }}
          justifyContent="flex-end"
          paddingRight={"10"}
        >
          <HashLink  to="#" >
           Home
            </HashLink>
           <HashLink   to="#about" >
           About
            </HashLink>
          <HashLink to={"#contact"}>
            Contact
          </HashLink>
          <HashLink to={"#projects"}  >
            Projects
          </HashLink>
          <Link  >
            Resume
          </Link>
        </HStack>
      </Flex>
      {isOpen && (
        <VStack
          pos="absolute"
          top={0}
          left={0}
          right={0}
          bg="gray.100"
          zIndex={999}
          display={{ md: "none" }}
          pb={4}
        >
          <IconButton
            aria-label="Close menu"
            ml="auto"
            onClick={onClose}
            icon={<CloseIcon />}
          />
          <VStack spacing={4} align="center">
            <Link to="/about" >
           About
            </Link>
            
            
            {/* // <Link href="#" fontSize="md">
            //   Home
            // </Link>
            // <Link href="#" fontSize="md">
            //   About
            // </Link>
            // <Link href="#" fontSize="md">
            //   Contact
            // </Link> */}
          </VStack>
        </VStack>
      )}
    </Box>
  );
};

export default Navbar;
