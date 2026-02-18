import "./App.css";
import Navbar from "./Components/Navbar";
import { Box } from "@chakra-ui/react";
import AllRoutes from "./Components/AllRoutes";

function App() {
  return (
    <Box
      className="App"
      minH="100vh"
      bgGradient="linear(to-br, #0a0e27, #1a1f3a, #2d3561)"
      position="relative"
      overflowX="hidden"
    >
      {/* Animated background elements */}
      <Box
        position="fixed"
        top="0"
        left="0"
        width="100%"
        height="100%"
        zIndex="0"
        pointerEvents="none"
        className="animated-background"
      />
      <Navbar id="nav-menu" />
      <Box position="relative" zIndex="1">
        <AllRoutes />
      </Box>
    </Box>
  );
}

export default App;
