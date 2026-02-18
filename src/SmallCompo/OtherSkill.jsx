import { Box, Center, SimpleGrid, VisuallyHidden, Tooltip } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box);

const OtherSkill = () => {
  const images = [
    {src:"https://cdn-icons-png.flaticon.com/128/5968/5968472.png", title:"Illustrator"},
    {src:"https://cdn-icons-png.flaticon.com/128/5968/5968520.png", title:"Photoshop"},
    {src:"https://cdn-icons-png.flaticon.com/128/5968/5968525.png", title:"Premiere Pro"},
    {src:"https://cdn-icons-png.flaticon.com/128/5968/5968428.png", title:"After Effects"},
    {src:"https://cdn-icons-png.flaticon.com/128/5968/5968442.png", title:"Audition"},
    {src:"https://cdn-icons-png.flaticon.com/128/174/174881.png", title:"WordPress"},
  ]
  
  return (
    <div className="skills-card">
      <SimpleGrid columns={[2, null, 3]} spacing={10}>
        {images.map((el, index) => (
          <Center key={el.title}>
            <Tooltip label={el.title} hasArrow placement="top" bg="rgba(102, 126, 234, 0.9)" color="white">
              <MotionBox
                borderRadius="15px"
                width="100px"
                height="100px"
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
                    width="60px"
                    height="60px"
                    src={el.src}
                    alt={el.title}
                    style={{ objectFit: "contain" }}
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

export default OtherSkill