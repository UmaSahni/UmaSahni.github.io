import React from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  VStack,
  Link as Clink
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box  >
      <Flex
      color={"white"}
        bg="#1f1f38"
        w="100%"
        px={4}
        py={4}
        align="center"
        justify="space-between"
        position="fixed"
       id="nav-menu"
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
          
          <Button
          onClick={
            ()=>window.open("https://drive.google.com/file/d/1dRHZrEma-kfLiYj-j_McunCJfHseC3O3/view?usp=share_link")}
            download="resume.pdf"
            id="resume-link-1"
            bg="#1f1f38"
            as="a"
            _hover={
              {
                bg:"black"
              }
            }
          
          >
            Resume
            
          </Button>
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
           <a
              href={"https://drive.google.com/file/d/1dRHZrEma-kfLiYj-j_McunCJfHseC3O3/view?usp=share_link"}
              target="_blank"
              download="pdf"
              id="resume-link-1"
              className="nav-link resume"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1dRHZrEma-kfLiYj-j_McunCJfHseC3O3/view?usp=share_link"
                )
              }
            >
              Resume
            </a>
           
          </Link>
            
            
          </VStack>
        </VStack>
      )}
    </Box>
  );
};

export default Navbar;