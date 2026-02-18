import { Box, Center, SimpleGrid, VisuallyHidden, Tooltip } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box);

const Fronted = () => {
  const images = [
    {src:"https://cdn-icons-png.flaticon.com/128/5968/5968267.png", title:"HTML"},
    {src:"https://cdn-icons-png.flaticon.com/128/5968/5968242.png", title:"CSS"},
    {src:"https://cdn-icons-png.flaticon.com/128/5968/5968292.png", title:"javaScript"},
    {src:"https://cdn-icons-png.flaticon.com/128/919/919851.png", title:"React"},
    {src:"https://camo.githubusercontent.com/eec63163a5209f78e8b0e3d6ab82eb981d03c4453a7a466f4fdc063da09f2a4d/68747470733a2f2f692e696d6775722e636f6d2f454d796b5a62332e706e67", title:"Chakra Ui"},
    {src:"https://cdn.worldvectorlogo.com/logos/redux.svg", title:"Redux"},
    {src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", title:"Tailwind CSS"},
    {src:"https://cdn.jsdelivr.net/npm/simple-icons@11/icons/reactquery.svg", title:"TanStack Query", iconStyle: { filter: "invert(1)" }},
    {src:"https://cdn-icons-png.flaticon.com/128/919/919851.png", title:"React Native"},
    {src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg", title:"WordPress"},
    {src:"https://img.icons8.com/fluency/96/artificial-intelligence.png", title:"Generative AI"},
  ]
  
  return (
    <div className="skills-card">
      <SimpleGrid columns={[3, 4, 4]} spacing={8}>
        {images.map((el, index) => (
          <Center key={el.title}>
            <Tooltip label={el.title} hasArrow placement="top" bg="rgba(102, 126, 234, 0.9)" color="white">
              <MotionBox
                width={{ base: "90px", md: "100px" }}
                height={{ base: "90px", md: "100px" }}
                borderRadius="15px"
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
                  <img
                    className="skills-card-img"
                    src={el.src}
                    alt={el.title}
                    style={{ width: "60px", height: "60px", objectFit: "contain", ...(el.iconStyle || {}) }}
                  />
                  <VisuallyHidden className="skills-card-name">{el.title}</VisuallyHidden>
                </Center>
              </MotionBox>
            </Tooltip>
          </Center>
        ))}
      </SimpleGrid>
    </div>
  )
}

export default Fronted