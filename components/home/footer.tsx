import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

const Logo = (props: any) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="target" width="50" height="50"><path d="M121.264 241h-90.42l2.45-17.124c6.919-48.361 28.917-92.265 63.617-126.964 34.7-34.7 78.603-56.699 126.965-63.617L241 30.844v90.421l-12.016 2.439c-53.163 10.792-94.488 52.117-105.281 105.281L121.264 241zM66.24 211h30.975C112.732 156.057 156.057 112.732 211 97.215V66.24C139.702 83.155 83.155 139.702 66.24 211zM271 481.156v-90.42l12.016-2.439c53.163-10.793 94.488-52.118 105.281-105.281L390.736 271h90.42l-2.45 17.124c-6.919 48.361-28.917 92.265-63.617 126.965s-78.604 56.698-126.965 63.617L271 481.156zm30-66.371v30.975c71.298-16.915 127.845-73.462 144.76-144.76h-30.975C399.268 355.943 355.943 399.268 301 414.785zm-60 66.371-17.124-2.45c-48.361-6.919-92.265-28.917-126.965-63.617s-56.698-78.603-63.617-126.965L30.844 271h90.42l2.439 12.016c10.793 53.163 52.118 94.488 105.281 105.281L241 390.736v90.42zM66.24 301C83.155 372.298 139.702 428.845 211 445.76v-30.975C156.057 399.268 112.732 355.943 97.215 301H66.24zm414.916-60h-90.42l-2.439-12.016c-10.793-53.164-52.118-94.489-105.281-105.281L271 121.265V30.844l17.124 2.45c48.361 6.918 92.265 28.917 126.965 63.617 34.7 34.7 56.698 78.604 63.617 126.964l2.45 17.125zm-66.371-30h30.975C428.845 139.702 372.298 83.155 301 66.24v30.975c54.943 15.517 98.268 58.842 113.785 113.785z"></path><path d="M301 166h-90V1h90v165zm-60-30h30V31h-30v105zm60 375h-90V346h90v165zm-60-30h30V376h-30v105zm270-180H346v-90h165v90zm-135-30h105v-30H376v30zm-210 30H1v-90h165v90zM31 271h105v-30H31v30zm225 30c-24.814 0-45-20.186-45-45 0-24.813 20.186-45 45-45 24.813 0 45 20.187 45 45 0 24.814-20.187 45-45 45zm0-60c-8.272 0-15 6.729-15 15 0 8.272 6.728 15 15 15 8.271 0 15-6.728 15-15 0-8.271-6.729-15-15-15z"></path><path d="M286 241h75v30h-75zM241 151h30v75h-30zM151 241h75v30h-75zM241 286h30v75h-30z"></path></svg>
    );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

export default function Footer() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}
            py={10}>
            <Container as={Stack} maxW={'8xl'}  py={0}>
                <SimpleGrid columns={{ base: 3, sm: 3, md: 3 }} spacing={4}>
                    <Stack align={'flex-start'}>
                        <ListHeader>Sports</ListHeader>
                        <Text>NBA</Text>
                        <Text>Golf</Text>
                        <Text>Coming Soon...</Text>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Follow Us</ListHeader>
                        <Link href={'https://www.instagram.com/prop.sniper/'}>Instagram</Link>
                        <Link href={'https://www.twitter.com/'}>Twitter</Link>
                        <Link href={'https://www.tiktok.com/'}>TikTok</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Legal</ListHeader>
                        <Link href={'#'}>Terms of Service</Link>
                        <Link href={'#'}>Privacy Policy</Link>
                        <Link href={'#'}>Disclaimer</Link>
                    </Stack>
                </SimpleGrid>
            </Container>
            <Box py={4}>
                <Flex
                    align={'center'}
                    _before={{
                        content: '""',
                        borderBottom: '1px solid',
                        borderColor: useColorModeValue('gray.200', 'gray.700'),
                        flexGrow: 1,
                        mr: 8,
                    }}
                    _after={{
                        content: '""',
                        borderBottom: '1px solid',
                        borderColor: useColorModeValue('gray.200', 'gray.700'),
                        flexGrow: 1,
                        ml: 8,
                    }}>
                    <Logo />
                </Flex>
                <Text pt={6} fontSize={'sm'} textAlign={'center'}>
                    © 2023 propsniper.io | All rights reserved.
                </Text>
                <Text pt={1} fontSize={'sm'} textAlign={'center'}>
                    This platform is meant for entertainment purposes only.

                </Text>
                <Text pt={0} fontSize={'sm'} textAlign={'center'}>
                    If you or someone you know has a gambling problem
                    and wants help, call 1-800 GAMBLER. Propsniper.io
                    is intended for adult users only.
                </Text>
            </Box>
        </Box>
    );
}