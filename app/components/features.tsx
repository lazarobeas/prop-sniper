import { ReactElement } from 'react';
import {
    Box, SimpleGrid, Icon, Text, Stack, Flex,
    Card, CardBody, Heading, Divider, CardFooter,
    ButtonGroup, Button, Image, Spacer, Wrap, WrapItem, Center,
}
    from '@chakra-ui/react';
import Head from "next/head";

interface FeatureProps {
    title: string;
    text: string;
    icon: ReactElement;
}

export default function Features() {
    return(
        <Box id="features-section" p={10} bgGradient='linear(to-r, gray.300, yellow.400, pink.200)' >
            <Heading
                fontWeight={700}
                mb={8}
                fontSize={{ base: '3xl', sm: '7xl', md: '7xl' }}
                textAlign={'center'}
            >
                Our Features
            </Heading>
            <Flex direction={{base:"column", sm:'row'}} alignItems="center" justifyContent="center" p={6} wrap={'wrap'}>
            <Center w={'100%'} justifyItems={'center'} ml={{base:'0', sm:'50', md:'0'}}>
            <Wrap>
            <WrapItem>
            <Card maxW='sm' bg={'transparent'} gap={10} alignContent={'center'}>
                <CardBody>
                    <Image
                        src='/bar-chart.png'
                        alt='Bar chart'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='lg'>Player Models</Heading>
                        <Divider bg={"black"}/>
                        <Text>
                            Leveraging AI, our proprietary models give you an edge in Pick&apos;em contests.
                            Simply input a player&apos;s stats along with its prop line.
                            Our model then simulates thousands of outcomes and provides you with
                            the best over/under outcome. This helps you make
                            educated decisions swiftly and confidently.
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
                </WrapItem>
                <Spacer/>
                <WrapItem>
            <Card maxW='sm' bg={'transparent'}>
                <CardBody>
                    <Image
                        src='/percentage.png'
                        alt='Bar chart'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='lg'>Discord Bots</Heading>
                        <Divider bg={"black"}/>
                        <Text>
                            Designed to keep you a step ahead in the dynamic world of sports betting, these bots are your
                            go-to source for discovering high-value +EV propositions. Whether you&apos;re crafting strategies
                            for half-time bets or responding swiftly to significant shifts during the game, our tools offer
                            real-time insights comparable to a sports market order book.
                            Seize opportunities as they arise and stay informed with every meaningful market fluctuation.
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
                </WrapItem>
                <Spacer/>
                <WrapItem>
                <Card maxW='sm' bg={'transparent'}>
                <CardBody p={6}>
                    <Image
                        src='/safe-box.png'
                        alt='Bar chart'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='lg'>Manage Bankroll</Heading>
                        <Divider bg={"black"}/>
                        <Text>
                            Welcome to a new era of bankroll management where
                            financial efficiency and strategic allocation become your game-changers.
                            Use our advanced platform to maximize your bankroll and optimize unit
                            size suggestions. Navigate the betting landscape with enhanced control,
                            ensuring your resources are not just expended, but intelligently invested.
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
                </WrapItem>
                <Spacer/>
                </Wrap>
            </Center>
            </Flex>
        </Box>

    );
}