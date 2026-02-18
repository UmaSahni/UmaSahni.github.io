import { Button, Center, Link, Stack, Text } from '@chakra-ui/react';
import { DiGithubBadge } from "react-icons/di";
import { GoMention, GoDeviceMobile } from "react-icons/go";
import { SiLinkedin } from "react-icons/si";
import { motion } from "framer-motion";

const MotionStack = motion(Stack);
const MotionBox = motion(Stack);

export default function SocialIcons() {
  const contactLinks = [
    {
      id: "contact-email",
      to: "mailto:support@uma.sahni.me@gmail.com",
      icon: <GoMention />,
      text: "Send to Gmail",
    },
    {
      id: "contact-linkedin",
      to: "https://www.linkedin.com/in/uma-sahni-4a8aa1246/",
      icon: <SiLinkedin />,
      text: "Send to LinkedIn",
    },
    {
      id: "contact-github",
      to: "https://github.com/UmaSahni",
      icon: <DiGithubBadge size="20px" />,
      text: "Send to GitHub",
    },
    {
      id: "contact-phone",
      to: "tel:+9156911048",
      icon: <GoDeviceMobile />,
      text: "+91 9156911048",
    },
  ];

  return (
    <Center p={{ base: 4, md: 6 }}>
      <MotionStack
        spacing={4}
        align="center"
        alignSelf="center"
        maxW="100%"
        w="full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {contactLinks.map((link, index) => (
          <MotionBox
            key={link.text}
            spacing={0}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Link
              href={link.to}
              target={link.to.startsWith("http") ? "_blank" : undefined}
              rel={link.to.startsWith("http") ? "noopener noreferrer" : undefined}
              _hover={{ textDecoration: "none" }}
            >
              <Button
                id={link.id}
                w="20rem"
                bgGradient="linear(to-r, #667eea, #764ba2)"
                color="white"
                leftIcon={link.icon}
                _hover={{
                  bgGradient: "linear(to-r, #764ba2, #667eea)",
                  boxShadow: "0 8px 20px rgba(102, 126, 234, 0.4)",
                  transform: "scale(1.02)",
                }}
                _active={{
                  bgGradient: "linear(to-r, #764ba2, #667eea)",
                  transform: "scale(0.98)",
                }}
                transition="all 0.2s ease"
              >
                <Center>
                  <Text>{link.text}</Text>
                </Center>
              </Button>
            </Link>
          </MotionBox>
        ))}
      </MotionStack>
    </Center>
  );
}