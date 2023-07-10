import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { BsPerson } from 'react-icons/bs';
import { FiServer } from 'react-icons/fi';
import { MdOutlineCandlestickChart } from 'react-icons/md';
import * as React from 'react';


interface StatsCardProps {
    title: string;
    stat: string;
    icon: ReactNode;
}
function StatsCard(props: StatsCardProps) {
    const { title, stat, icon } = props;
    return (
        <Stat
            px={{ base: 2, md: 4 }}
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor={useColorModeValue('gray.800', 'gray.500')}
            rounded={'lg'}>
            <Flex justifyContent={'space-between'}>
                <Box pl={{ base: 2, md: 4 }}>
                    <StatLabel fontWeight={'medium'} isTruncated>
                        {title}
                    </StatLabel>
                    <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                        {stat}
                    </StatNumber>
                </Box>
                <Box
                    my={'auto'}
                    color={useColorModeValue('gray.800', 'gray.200')}
                    alignContent={'center'}>
                    {icon}
                </Box>
            </Flex>
        </Stat>
    );
}

export default function BasicStatistics() {
    return (
        <Box maxW="100%" mx={'auto'} pt={5} px={{ base: 24, sm: 12, md: 36 }} bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'>
            <chakra.h1
                textAlign={'center'}
                fontSize={'4xl'}
                py={10}
                fontWeight={'bold'}>
                Experience the power of data driven decisions!
            </chakra.h1>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                <StatsCard
                    title={'NBA Models'}
                    stat={'40+'}
                    icon={<BsPerson size={'3em'} />}
                />
                <StatsCard
                    title={'Data Points'}
                    stat={'5,000+'}
                    icon={<FiServer size={'3em'} />}
                />
                <StatsCard
                    title={'Available Markets'}
                    stat={'2+'}
                    icon={<MdOutlineCandlestickChart size={'3em'} />}
                />
            </SimpleGrid>
        </Box>

    );
}