import {
    Box,
    Flex,
    Link,
    Button,
    Stack,
    Text, Spacer
} from '@chakra-ui/react';
import Image from "next/image";
import NextLink from 'next/link'



export default function Navbar() {
    return (
        <>
            <Box bgGradient='linear(to-r, gray.300, yellow.400, pink.200)' px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'left'} p={'2'}>
                    <Box>
                        <Link as={NextLink} href='/'>

                        <Image src='target.svg' alt="logo" width="50" height='50'/>

                        </Link>
                    </Box>
                    <Box p={'6'}>
                        <Text as='b' fontSize={{ base: 'md', md: 'xl', lg: '2xl' }}>PropSniper</Text>
                    </Box>
                    <Spacer />
                    <Flex alignItems={'right'}>
                        <Stack direction={'row'} spacing={7} px={4}>
                        <Link as={NextLink} href='/dashboard'>
                            <Button
                                colorScheme={'red'}
                                bg={'red.400'}
                                rounded={'full'}
                                px={6}
                                _hover={{
                                    bg: 'green.500',
                                }}>
                                <Text as='b' fontSize={{ base: 'md', md: 'xl', lg: '2xl' }}>Dashboard</Text>
                            </Button>
                        </Link>
                    </Stack>
                    <Stack direction={'row'} spacing={7}>
                        <Link as={NextLink} href='/discord'>
                            <Button
                                colorScheme={'red'}
                                paddingRight={10}
                                bg={'red.400'}
                                rounded={'full'}
                                px={6}
                                _hover={{
                                    bg: 'blue.300',
                                }}>
                                <Text as='b' fontSize={{ base: 'md', md: 'xl', lg: '2xl' }}>Discord Bots</Text>
                            </Button>
                        </Link>
                    </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}