import {
  Box,
  Center,
  Flex,
  GridItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { BoxWrapper } from "../../Shared/BoxWrapper";
import SmallBox from "../../Shared/SmallBox";

export default function MainBar({ children }: any) {
  const Props = [
    {
      src: 'https://bit.ly/dan-abramov',
      name: 'First image',
      textup: '2.348',
      textbottom: 'Weekly Follower',
    },
    {
      src: 'https://bit.ly/ryan-florence',
      name: 'Second image',
      textup: '2.348',
      textbottom: 'Weekly following',
    },
    {
      src: 'https://bit.ly/kent-c-dodds',
      name: 'Third image',
      textup: '2.348',
      textbottom: 'Weekly Like',
    },
    {
      src: 'https://bit.ly/prosper-baba',
      name: 'Fourth image',
      textup: '2.348',
      textbottom: 'Weekly Comment',
    },
  ]
  return (
    <GridItem>
      <Stack direction={"row"} justifyContent={"space-between"}>
      {Props?.map((prop, index) => (
        <SmallBox name={prop.name} src={prop.src} textup={prop.textup} textbottom={prop.textbottom} key={index}/>
      ))}

      </Stack>
      <Box>
        <BoxWrapper>
          
            <Flex direction={'column'} alignItems={'center'}>
            
              <Box p={'1rem'}>
                <Center flexDirection={'column'}>
                <Image src={'https://bit.ly/prosper-baba'} alt={'picture'} width={60} height={60} style={{ borderRadius: '50%' }} />
                <Text textAlign={'center'}>Lebron James</Text>
                </Center>
                </Box>
              <Box w={'100%'}>
                <Stack direction={'row'} justifyContent={'space-evenly'} textAlign={'center'}>
                  <Flex direction={'column'} >
                    <Text color={'#505050'} fontSize={'12px'} p={0} m={0}>Post</Text>
                    <Text>498</Text>
                  </Flex>
                  <Flex direction={'column'}>
                    <Text color={'#505050'} fontSize={'12px'} p={0} m={0}>Followers</Text>
                    <Text>12,459M</Text>
                  </Flex>
                  <Flex direction={'column'}>
                    <Text color={'#505050'} fontSize={'12px'} p={0} m={0}>Following</Text>
                    <Text>358</Text>
                  </Flex>

                </Stack>
              </Box>
            </Flex>
            
        </BoxWrapper>
        </Box>
    </GridItem>
  );
}
