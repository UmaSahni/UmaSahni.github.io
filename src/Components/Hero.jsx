import {
  Box,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
import SociaIcons from './SociaIcons';
  
  export default function Hero() {
    return (
     <Center>
     <Stack mt={"2rem"} minH={'20vh'} direction={{ base: 'column', md: 'row' }}>
       
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                id="user-detail-name"
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}>
                Uma Sahni
              </Text>
              <br />{' '}
              <Text color={'blue.400'} as={'span'}>
                Full Stack Web Developer
              </Text>{' '}
            </Heading>
            <Text  id="user-detail-intro" fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            A Skilled full stack developer and quick learner who can quickly adapt to new environments. 
            </Text>
           
              <SociaIcons/>
             
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              {/* <Button
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
               Resume
              </Button>
              <Button rounded={'full'}>How It Works</Button> */}
              
              
             
            </Stack>
          </Stack>
        </Flex>
       
        <Flex  flex={1}>
       <Center>
          <Image
          // boxShadow="inset 0 0 10px #322e49, inset 0 0 20px #322e49, inset 0 0 30px #322e49"
          borderRadius={"50%"}
            alt={'Login Image'}
            objectFit={'cover'}
            boxSize='20rem'
            backgroundColor={"white"}
            // width="sm"
            // height={"sm"}
            // m="10"
            src={
              'https://avatars.githubusercontent.com/u/112793743?v=4'
            }
          />
         </Center>
        </Flex>
      
      </Stack>
      </Center>
    );
  }