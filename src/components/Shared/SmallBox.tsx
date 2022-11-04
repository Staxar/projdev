import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import Image from "next/image"

interface Props {
    src: string,
    textup: string,
    textbottom: string,
    name: string
}

function SmallBox({ src, textup, textbottom, name }: Props) {
    return (
        <Box border={'1px solid #202020'} borderRadius={'0.5rem'} padding={'1rem'}>
                <Flex gap={'0.5rem'} alignItems={'center'}>
                    <Box>
                        <Image src={src} alt={name} width={30} height={30} style={{ borderRadius: '50%' }} />
                    </Box>
                    <Flex flexDirection={'column'}>
                        <Heading p={0} m={0}>{textup} </Heading>
                        <Text p={0} m={0} fontSize='12px' color={'#505050'}>{textbottom}</Text>
                    </Flex>
                </Flex>
        </Box>
    )
}

export default SmallBox




