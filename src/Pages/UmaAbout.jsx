import {
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import Intro from "./About/Intro";

const UmaAbout = () => {
  return (
    <div style={{ width: "85%", margin: "auto" }}>
      <Heading id="about">About Me</Heading>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Introduction</Tab>
          <Tab>Experience</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Intro/>
          </TabPanel>

          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default UmaAbout;
