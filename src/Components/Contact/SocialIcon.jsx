import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { SiLinkedin, SiMessenger } from 'react-icons/si';
import { Box, Button, Center, Stack, Text } from '@chakra-ui/react';
import { DiGithubBadge } from "react-icons/di";
import { GoMention,GoDeviceMobile } from "react-icons/go";
import { SiFiverr } from "react-icons/si";
import {TfiYoutube } from "react-icons/tfi";
import {Link} from "react-router-dom"
export default function SocialIcons() {
  return (
    <Center p={8}>
      <Stack spacing={2} align={'center'} maxW={'md'} w={'full'}>
        
        <Link id="contact-email" to={"mailto:support@uma.sahni.me@gmail.com"} target={'_blank'} >
        <Button  w={'20rem'}  colorScheme={'messenger'} leftIcon={<GoMention />}>
          <Center>
            <Text>Send to Gamil</Text>
          </Center>
        </Button>
        </Link>

        {/* LinkedIn */}
         <Link id="contact-linkedin" to={"https://www.linkedin.com/in/uma-sahni-4a8aa1246/"}  target={'_blank'} >
        <Button  w={'20rem'} colorScheme={'messenger'} leftIcon={<SiLinkedin    />}>
          <Center>
            <Text>Send to Linkedin</Text>
          </Center>
        </Button>
        </Link>
        {/* Messenger */}
         <Link id="contact-github" to={"https://github.com/UmaSahni"}  target={'_blank'} >
        <Button  w={'20rem'} colorScheme={'messenger'} leftIcon={<DiGithubBadge size="20px" />}>
          <Center>
            <Text>Send to GitHub</Text>
          </Center>
        </Button>
        </Link>
         <Link id="contact-phone" to={"tel:+9156911048"}  >
        <Button w={'20rem'} colorScheme={'messenger'} leftIcon={<GoDeviceMobile />}>
          <Center>
            <Text>+91 9156911048</Text>
          </Center>
        </Button>
      </Link>
         <Link to={"https://www.fiverr.com/uma_sahni"}  target={'_blank'} >
        <Button w={'20rem'} colorScheme={'messenger'} leftIcon={<SiFiverr size="35px" />}>
          <Center>
            <Text>Send to Fiverr</Text>
          </Center>
        </Button>
        </Link>
         <Link to={"https://www.youtube.com/@Crystal_Vibes"}  target="_blank"  >
        <Button w={'20rem'} colorScheme={'messenger'} leftIcon={<TfiYoutube size="20px" />}>
          <Center>
            <Text>Send to Youtube</Text>
          </Center>
        </Button>
        </Link>
      </Stack>
    </Center>
  );
}