import { Flex, Box, Button, ButtonGroup, Center, Link } from "@chakra-ui/react";

 function SocialIcons() {
  return (
    
    <Flex justifyContent="center" alignItems="center" marginTop="20px">
        <ButtonGroup>
      
      <Box bg="#F2F2F2" borderRadius="10px" padding="10px" boxShadow="0px 3px 5px rgba(0,0,0,0.2)">
        <Link target={"_blank"} href="https://www.linkedin.com/in/uma-sahni-4a8aa1246/" >
        <Button variant="ghost">
          <img src="https://img.icons8.com/fluency/1x/linkedin-2.png" alt="" width="30px" height="30px" />
        </Button>
        </Link>
      </Box>
     
      <Box bg="#F2F2F2" borderRadius="10px" padding="10px" boxShadow="0px 3px 5px rgba(0,0,0,0.2)">
        <Link target={"_blank"} href="https://github.com/UmaSahni"  >
        <Button variant="ghost">
          <img src="https://img.icons8.com/glyph-neue/1x/github.png" alt="" width="30px" height="30px" />
        </Button>
      </Link>
      </Box>
      <Box bg="#F2F2F2" borderRadius="10px" padding="10px" boxShadow="0px 3px 5px rgba(0,0,0,0.2)">
        <Link target={"_blank"} href="mailto:support@uma.sahni.me@gmail.com"  >
        <Button variant="ghost">
          <img src="https://img.icons8.com/color/1x/gmail.png" alt="" width="30px" height="30px" />
        </Button>
        </Link>
      </Box>
      </ButtonGroup>
    </Flex>
   
  );
}
export default SocialIcons
