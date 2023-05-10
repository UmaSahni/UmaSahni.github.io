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
    <div  style={{ width: "85%", margin: "auto" }}>
      <Intro/>
    </div>
  );
};

export default UmaAbout;
