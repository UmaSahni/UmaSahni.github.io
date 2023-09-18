import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import Backed from "../SmallCompo/Backed";
import Fronted from "../SmallCompo/Fronted";
import OtherSkill from "../SmallCompo/OtherSkill";

const Skills = () => {
  return (
    <div style={{ backgroundColor: "#dceffa", padding: "20px 0" }} id="skills">
      <div className="nav-link skills">
        <Heading fontFamily={"Inter"} py="5">
          {" "}
          Technical Skills
        </Heading>

        <Box margin={"auto"} width={"85vw"}>
          <SimpleGrid columns={[1, 1, null, 3]} spacing={10}>
            <Box height="auto">
              <Heading p={"5"} bg={"#322e49"} color="white" m={"2"} size={"lg"}>
                Fronted Skills
              </Heading>
              <Container mt={"6"}>
                <Fronted />
              </Container>
            </Box>
            <Box height="auto">
              <Heading p={"5"} bg={"#322e49"} color="white" m={"2"} size={"lg"}>
                Backend Skills
              </Heading>
              <Container mt={"6"}>
                <Backed />
              </Container>
            </Box>
            <Box height="auto">
              <Heading p={"5"} bg={"#322e49"} color="white" m={"2"} size={"lg"}>
                Other Skills
              </Heading>
              <Container mt={"6"}>
                <OtherSkill />
              </Container>
            </Box>
          </SimpleGrid>
        </Box>
      </div>
    </div>
  );
};

export default Skills;
