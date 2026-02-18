import { Box, Center, Image, SimpleGrid, Text, VisuallyHidden, Tooltip, Wrap, WrapItem, Tag, TagLabel } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box);

const Backed = () => {
  const images = [
    {src:"https://cdn-icons-png.flaticon.com/128/919/919825.png",title:"Node.js"},
    {src:"https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png?f=avif&w=128",title:"MongoDB"},
    {src:"https://cdn.iconscout.com/icon/free/png-256/express-9-1175170.png?f=avif&w=128",title:"Express"},
  ]

  const capabilityChips = [
    "REST APIs",
    "CRUD",
    "Auth (JWT)",
    "Middleware",
    "DB Modeling",
    "Validation",
    "Error Handling",
    "Deployment",
  ];
  
  return (
    <div className="skills-card">
      <SimpleGrid columns={[3, 3, 3]} spacing={8} justifyItems="center">
        {images.map((el, index) => (
          <Center key={el.title}>
            <Tooltip label={el.title} hasArrow placement="top" bg="rgba(102, 126, 234, 0.9)" color="white">
              <MotionBox
                borderRadius="15px"
                width={{ base: "90px", md: "110px" }}
                height={{ base: "90px", md: "110px" }}
                bg="rgba(255, 255, 255, 0.1)"
                backdropFilter="blur(5px)"
                border="1px solid rgba(255, 255, 255, 0.2)"
                display="flex"
                alignItems="center"
                justifyContent="center"
                cursor="pointer"
                initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{
                  scale: 1.2,
                  rotate: 10,
                  boxShadow: "0 10px 30px rgba(102, 126, 234, 0.5)",
                  borderColor: "rgba(102, 126, 234, 0.8)",
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Center>
                  <Image
                    className="skills-card-img"
                    width={{ base: "56px", md: "68px" }}
                    height={{ base: "56px", md: "68px" }}
                    src={el.src}
                    alt={el.title}
                    objectFit="contain"
                  />
                  <VisuallyHidden className="skills-card-name">{el.title}</VisuallyHidden>
                </Center>
              </MotionBox>
            </Tooltip>
          </Center>
        ))}
      </SimpleGrid>

      <Box mt="6">
        <Text
          fontSize="sm"
          color="rgba(255, 255, 255, 0.75)"
          fontWeight="600"
          letterSpacing="0.4px"
          textAlign="left"
          mb="3"
        >
          What I build
        </Text>
        <Wrap spacing="10px">
          {capabilityChips.map((chip, index) => (
            <WrapItem key={chip}>
              <MotionBox
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.05 * index }}
                whileHover={{ y: -2, scale: 1.02 }}
              >
                <Tag
                  size="md"
                  borderRadius="full"
                  bg="rgba(255, 255, 255, 0.08)"
                  border="1px solid rgba(255, 255, 255, 0.14)"
                  color="rgba(255, 255, 255, 0.9)"
                  px="12px"
                  py="6px"
                  backdropFilter="blur(8px)"
                >
                  <TagLabel>{chip}</TagLabel>
                </Tag>
              </MotionBox>
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </div>
  )
}

export default Backed