import { Flex, Box, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

function SocialIcons() {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/uma-sahni-4a8aa1246/",
      icon: "https://img.icons8.com/fluency/1x/linkedin-2.png",
      label: "LinkedIn",
    },
    {
      href: "https://github.com/UmaSahni",
      icon: "https://img.icons8.com/glyph-neue/1x/github.png",
      label: "GitHub",
    },
    {
      href: "mailto:support@uma.sahni.me@gmail.com",
      icon: "https://img.icons8.com/color/1x/gmail.png",
      label: "Gmail",
    },
  ];

  return (
    <Flex justifyContent="center" alignItems="center" marginTop="20px" gap="15px">
      {socialLinks.map((social, index) => (
        <MotionBox
          key={social.label}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: index * 0.1,
            type: "spring",
            stiffness: 200,
          }}
          whileHover={{
            scale: 1.2,
            rotate: 10,
            boxShadow: "0 10px 30px rgba(102, 126, 234, 0.5)",
          }}
          whileTap={{ scale: 0.9 }}
        >
          <Link target="_blank" href={social.href} rel="noopener noreferrer">
            <Box
              bg="rgba(255, 255, 255, 0.1)"
              backdropFilter="blur(10px)"
              borderRadius="15px"
              padding="12px"
              border="1px solid rgba(255, 255, 255, 0.2)"
              cursor="pointer"
              transition="all 0.3s ease"
              _hover={{
                bg: "rgba(102, 126, 234, 0.2)",
                borderColor: "rgba(102, 126, 234, 0.5)",
              }}
            >
              <img
                src={social.icon}
                alt={social.label}
                width="30px"
                height="30px"
                style={{ display: "block" }}
              />
            </Box>
          </Link>
        </MotionBox>
      ))}
    </Flex>
  );
}

export default SocialIcons;
