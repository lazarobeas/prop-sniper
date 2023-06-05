import {
    Box,
    Center,
    Text,
    Stack,
    List,
    ListItem,
    ListIcon,
    Button,
    useColorModeValue, Heading,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

export default function Faqs() {
    return (
        <Box bgGradient='linear(to-r, gray.300, yellow.400, pink.200)' >
        <Center py={6}>
            <Box
                maxW={'1000px'}
                w={'full'}
                boxShadow={'md'}
                rounded={'md'}
                overflow={'hidden'}>

                <Box px={6} py={10}>
                    <Heading
                        fontWeight={600}
                        mb={8}
                        fontSize={{ base: '3xl', sm: '6xl', md: '6xl' }}
                        textAlign={'center'}
                    >
                        Why is our platform better?
                    </Heading>
                    <List spacing={3}>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="green.400" />
                            Explore AI-driven high accuracy stat models
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="green.400" />
                            Be more efficient with your bankroll
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="green.400" />
                            Use our platform from anywhere
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="green.400" />
                            Be the first to test new features
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </Center>
        </Box>
    );
}