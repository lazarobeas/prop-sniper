import Sniper from '@/public/sniper.svg'

import { ReactNode } from 'react';
import {
    Box,
    Flex,
    Avatar,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center, Text, Spacer,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
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
        href={'#'}>
        {children}
    </Link>
);

export default function Navbar() {
    return (
        <>
            <Box bgGradient='linear(to-r, gray.300, yellow.400, pink.200)' px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'left'} p={'2'}>
                    <Box>
                        <a>
                            <Image src='target.svg' alt="logo" width="50" height='50'/>
                        </a>
                    </Box>
                    <Box p={'6'}>
                        <Text as='b' fontSize={{ base: 'md', md: 'xl', lg: '2xl' }}>PropSniper</Text>
                    </Box>
                    <Spacer />
                    <Flex alignItems={'right'}>
                        <Stack direction={'row'} spacing={7}>
                            <Text as='b' fontSize={{ base: 'md', md: 'xl', lg: '2xl' }}>Private Beta Available</Text>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}