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
    <div    style={{ width: "85%", margin: "auto",backgroundColor:"white", borderRadius:"1rem", padding:"2rem, 0", marginTop:"3rem" }}>
      <Intro/>
    </div>
  );
};

export default UmaAbout;
