'use client'
import { ReactNode } from 'react';
import {
    Box,
    Flex,
    Link,
    Button,
    useColorModeValue,
    Stack,
    Text, Spacer
} from '@chakra-ui/react';
import Image from "next/image";


const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'/'}>
        {children}
    </Link>
);

export default function Navbar() {
    return (
            <Box bgGradient='linear(to-r, gray.300, yellow.400, pink.200)' px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'left'} p={'2'}>
                    <Box>
                        <a>
                            <Link href={'/'}>
                            <Image src='target.svg' alt="logo" width="50" height='50'/>
                            </Link>
                        </a>
                    </Box>
                    <Box p={'6'}>
                        <Text as='b' fontSize={{ base: 'md', md: 'xl', lg: '2xl' }}>PropSniper</Text>
                    </Box>
                    <Spacer />
                    <Flex alignItems={'right'}>
                        <Stack direction={'row'} spacing={7}>

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
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
    );
}