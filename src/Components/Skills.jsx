import {
  Box,
  Container,
  Heading,
  Text,
  Wrap,
  WrapItem,
  Tooltip,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const SKILLS = {
  frontend: [
    { src: "https://cdn-icons-png.flaticon.com/128/5968/5968267.png", title: "HTML" },
    { src: "https://cdn-icons-png.flaticon.com/128/5968/5968242.png", title: "CSS" },
    { src: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png", title: "JavaScript" },
    { src: "https://cdn-icons-png.flaticon.com/128/919/919851.png", title: "React" },
    { src: "https://cdn.simpleicons.org/nextdotjs/FFFFFF", title: "Next.js", iconStyle: { filter: "brightness(0) invert(1)" } },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chakraui/chakraui-original.svg", title: "Chakra UI" },
    { src: "https://cdn.worldvectorlogo.com/logos/redux.svg", title: "Redux" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", title: "Tailwind CSS" },
    { src: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/reactquery.svg", title: "TanStack Query", iconStyle: { filter: "invert(1)" } },
    { src: "https://cdn-icons-png.flaticon.com/128/919/919851.png", title: "React Native" },
    { src: "https://cdn.simpleicons.org/wordpress/21759B", title: "WordPress" },
    { src: "https://cdn.simpleicons.org/firebase/FFCA28", title: "Firebase" },
    { src: "https://img.icons8.com/fluency/96/artificial-intelligence.png", title: "Generative AI" },
  ],
  backend: [
    { src: "https://cdn-icons-png.flaticon.com/128/919/919825.png", title: "Node.js" },
    { src: "https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png?f=avif&w=128", title: "MongoDB" },
    { src: "https://cdn.iconscout.com/icon/free/png-256/express-9-1175170.png?f=avif&w=128", title: "Express" },
  ],
};

function SkillPill({ skill, index }) {
  return (
    <Tooltip key={skill.title} label={skill.title} hasArrow placement="top" bg="rgba(102, 126, 234, 0.95)" color="white">
      <WrapItem>
        <MotionBox
          display="flex"
          alignItems="center"
          gap="10px"
          px="14px"
          py="10px"
          borderRadius="full"
          bg="rgba(255, 255, 255, 0.06)"
          border="1px solid rgba(255, 255, 255, 0.12)"
          cursor="default"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.04 }}
          whileHover={{
            scale: 1.05,
            borderColor: "rgba(102, 126, 234, 0.5)",
            boxShadow: "0 6px 20px rgba(102, 126, 234, 0.25)",
          }}
        >
          <Image
            src={skill.src}
            alt={skill.title}
            width="28px"
            height="28px"
            objectFit="contain"
            flexShrink={0}
            style={skill.iconStyle || {}}
          />
          <Text color="white" fontSize="sm" fontWeight="500" whiteSpace="nowrap">
            {skill.title}
          </Text>
        </MotionBox>
      </WrapItem>
    </Tooltip>
  );
}

const Skills = () => {
  return (
    <Box
      id="skills"
      className="nav-link skills"
      py="80px"
      px={{ base: 4, md: 8 }}
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgGradient="linear(to-b, rgba(102, 126, 234, 0.06), rgba(118, 75, 162, 0.04))"
        zIndex="0"
      />
      <Container maxW="1100px" position="relative" zIndex="1">
        <MotionHeading
          fontFamily="Inter"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          py="5"
          textAlign="center"
          color="white"
          mb="2rem"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </MotionHeading>

        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <Box
            borderRadius="2xl"
            p={{ base: 5, md: 8 }}
            bg="rgba(255, 255, 255, 0.04)"
            border="1px solid rgba(255, 255, 255, 0.08)"
            backdropFilter="blur(12px)"
          >
            <Text
              fontSize="xs"
              fontWeight="600"
              color="rgba(255, 255, 255, 0.5)"
              letterSpacing="0.2em"
              textTransform="uppercase"
              mb="3"
              textAlign="center"
            >
              Frontend
            </Text>
            <Wrap spacing="3" justify="center" mb="6">
              {SKILLS.frontend.map((skill, i) => (
                <SkillPill key={skill.title} skill={skill} index={i} />
              ))}
            </Wrap>

            <Box
              w="100%"
              maxW="120px"
              mx="auto"
              my="5"
              h="1px"
              bgGradient="linear(to-r, transparent, rgba(102, 126, 234, 0.4), transparent)"
            />
            <Text
              fontSize="xs"
              fontWeight="600"
              color="rgba(255, 255, 255, 0.5)"
              letterSpacing="0.2em"
              textTransform="uppercase"
              mb="3"
              textAlign="center"
            >
              Backend & server
            </Text>
            <Wrap spacing="3" justify="center">
              {SKILLS.backend.map((skill, i) => (
                <SkillPill key={skill.title} skill={skill} index={i} />
              ))}
            </Wrap>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Skills;
