import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  VStack,
  Text,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { motion, AnimatePresence } from "framer-motion";
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "#home", label: "Home" },
    { to: "#about", label: "About" },
    { to: "#projects", label: "Projects" },
    { to: "#contact", label: "Contact" },
  ];

  const MotionBox = motion(Box);
  const MotionFlex = motion(Flex);
  const MotionHStack = motion(HStack);
  const MotionVStack = motion(VStack);

  return (
    <MotionBox
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <MotionFlex
        color="white"
        bg={scrolled ? "rgba(31, 31, 56, 0.8)" : "rgba(31, 31, 56, 0.95)"}
        backdropFilter="blur(10px)"
        w="100%"
        px={4}
        py={4}
        align="center"
        justify="space-between"
        position="fixed"
        id="nav-menu"
        top="0"
        zIndex="100"
        borderBottom={scrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "none"}
        transition="all 0.3s ease"
        boxShadow={scrolled ? "0 4px 20px rgba(0, 0, 0, 0.3)" : "none"}
      >
        <MotionBox
          paddingLeft={{ base: "4", md: "10" }}
          fontWeight="bold"
          fontSize="xl"
          bgGradient="linear(to-r, #667eea, #764ba2)"
          bgClip="text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Uma Sahni
        </MotionBox>
        <IconButton
          aria-label="Open menu"
          display={{ base: "block", md: "none" }}
          onClick={onOpen}
          icon={<HamburgerIcon />}
          variant="ghost"
          color="white"
          _hover={{ bg: "rgba(255, 255, 255, 0.1)" }}
        />
        <HStack
          as="nav"
          spacing={6}
          display={{ base: "none", md: "flex" }}
          justifyContent="flex-end"
          paddingRight="10"
        >
          {navLinks.map((link, index) => (
            <MotionBox
              key={link.to}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <HashLink to={link.to}>
                <Text
                  as="span"
                  position="relative"
                  cursor="pointer"
                  _hover={{ color: "#667eea" }}
                  transition="color 0.3s ease"
                  fontSize="md"
                  fontWeight="500"
                  _after={{
                    content: '""',
                    position: "absolute",
                    width: "0",
                    height: "2px",
                    bottom: "-5px",
                    left: "0",
                    bg: "linear-gradient(to right, #667eea, #764ba2)",
                    transition: "width 0.3s ease",
                  }}
                  _hover={{
                    _after: {
                      width: "100%",
                    },
                  }}
                >
                  {link.label}
                </Text>
              </HashLink>
            </MotionBox>
          ))}
          <MotionBox
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Button
              bgGradient="linear(to-r, #667eea, #764ba2)"
              color="white"
              variant="solid"
              _hover={{
                bgGradient: "linear(to-r, #764ba2, #667eea)",
                transform: "translateY(-2px)",
                boxShadow: "0 4px 12px rgba(102, 126, 234, 0.4)",
              }}
              transition="all 0.3s ease"
              id="resume-button-1"
            >
              <a
                href="Uma_Sahni_Resume.pdf"
                target="_blank"
                download="Uma-Sahni-Resume.pdf"
                id="resume-link-1"
                className="nav-link resume"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1dRHZrEma-kfLiYj-j_McunCJfHseC3O3/view?usp=share_link"
                  )
                }
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Resume
              </a>
            </Button>
          </MotionBox>
        </HStack>
      </MotionFlex>
      <AnimatePresence>
        {isOpen && (
          <MotionVStack
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            pos="fixed"
            top="60px"
            left="0"
            right="0"
            bg="rgba(31, 31, 56, 0.98)"
            backdropFilter="blur(10px)"
            zIndex={999}
            display={{ md: "none" }}
            pb={4}
            pt={4}
            boxShadow="0 4px 20px rgba(0, 0, 0, 0.3)"
          >
            <IconButton
              aria-label="Close menu"
              ml="auto"
              mr={4}
              onClick={onClose}
              icon={<CloseIcon />}
              variant="ghost"
              color="white"
              _hover={{ bg: "rgba(255, 255, 255, 0.1)" }}
            />
            <VStack spacing={6} align="center" w="100%">
              {navLinks.map((link, index) => (
                <MotionBox
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  w="100%"
                  textAlign="center"
                >
                  <HashLink to={link.to} onClick={onClose}>
                    <Text
                      color="white"
                      fontSize="lg"
                      fontWeight="500"
                      _hover={{ color: "#667eea" }}
                      transition="color 0.3s ease"
                    >
                      {link.label}
                    </Text>
                  </HashLink>
                </MotionBox>
              ))}
              <Button
                bgGradient="linear(to-r, #667eea, #764ba2)"
                color="white"
                variant="solid"
                _hover={{
                  bgGradient: "linear(to-r, #764ba2, #667eea)",
                }}
                id="resume-button-1"
                w="80%"
              >
                <a
                  href="Uma_Sahni_Resume.pdf"
                  target="_blank"
                  download="Uma-Sahni-Resume.pdf"
                  id="resume-link-1"
                  className="nav-link resume"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1dRHZrEma-kfLiYj-j_McunCJfHseC3O3/view?usp=share_link"
                    )
                  }
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Resume
                </a>
              </Button>
            </VStack>
          </MotionVStack>
        )}
      </AnimatePresence>
    </MotionBox>
  );
};

export default Navbar;