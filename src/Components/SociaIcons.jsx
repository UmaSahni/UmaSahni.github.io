import { Flex, Box, Button, ButtonGroup, Center } from "@chakra-ui/react";

 function SocialIcons() {
  return (
    
    <Flex justifyContent="center" alignItems="center" marginTop="20px">
        <ButtonGroup>
      <Box bg="#F2F2F2" borderRadius="10px" padding="10px" boxShadow="0px 3px 5px rgba(0,0,0,0.2)">
        <Button variant="ghost">
          <img src="https://img.icons8.com/fluency/1x/linkedin-2.png" alt="" width="30px" height="30px" />
        </Button>
      </Box>
      <Box bg="#F2F2F2" borderRadius="10px" padding="10px" boxShadow="0px 3px 5px rgba(0,0,0,0.2)">
        <Button variant="ghost">
          <img src="https://img.icons8.com/glyph-neue/1x/github.png" alt="" width="30px" height="30px" />
        </Button>
      </Box>
      <Box bg="#F2F2F2" borderRadius="10px" padding="10px" boxShadow="0px 3px 5px rgba(0,0,0,0.2)">
        <Button variant="ghost">
          <img src="https://img.icons8.com/color/1x/gmail.png" alt="" width="30px" height="30px" />
        </Button>
      </Box>
      </ButtonGroup>
    </Flex>
   
  );
}
export default SocialIcons
