import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { SiLinkedin, SiMessenger } from 'react-icons/si';
import { Box, Button, Center, Stack, Text } from '@chakra-ui/react';
import { DiGithubBadge } from "react-icons/di";
import { GoMention,GoDeviceMobile } from "react-icons/go";
import { SiFiverr } from "react-icons/si";
import {TfiYoutube } from "react-icons/tfi";
export default function SocialIcons() {
  return (
    <Center p={8}>
      <Stack spacing={2} align={'center'} maxW={'md'} w={'full'}>
      <Button w={'full'} colorScheme={'messenger'} leftIcon={<GoMention />}>
          <Center>
            <Text>Send to Messenger</Text>
          </Center>
        </Button>

        {/* LinkedIn */}
        <Button w={'full'} colorScheme={'messenger'} leftIcon={<SiLinkedin />}>
          <Center>
            <Text>Send to Linkedin</Text>
          </Center>
        </Button>

        {/* Messenger */}
        <Button w={'full'} colorScheme={'messenger'} leftIcon={<DiGithubBadge />}>
          <Center>
            <Text>Send to Messenger</Text>
          </Center>
        </Button>

        <Button w={'full'} colorScheme={'messenger'} leftIcon={<GoDeviceMobile />}>
          <Center>
            <Text>Send to Messenger</Text>
          </Center>
        </Button>

        <Button w={'full'} colorScheme={'messenger'} leftIcon={<SiFiverr />}>
          <Center>
            <Text>Send to Messenger</Text>
          </Center>
        </Button>

        <Button w={'full'} colorScheme={'messenger'} leftIcon={<TfiYoutube />}>
          <Center>
            <Text>Send to Messenger</Text>
          </Center>
        </Button>
      </Stack>
    </Center>
  );
}