'use client'
import { FormEvent, ChangeEvent, useState } from 'react';
import {
    Stack,
    FormControl,
    Input,
    Button,
    useColorModeValue,
    Heading,
    Text,
    Container,
    Flex,
    useToast,
    Box
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [state, setState] = useState<'initial' | 'submitting' | 'success'>(
        'initial'
    );
    const [error, setError] = useState(false);
    const toast = useToast();

    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email) {
            return toast({
                description: 'Email is required',
                status: 'error'
            });
        }

        setState("submitting");

        try {
            const res = await fetch('/api/subscribe', {
                method: 'POST',
                body: JSON.stringify({ email: email })
            });

            const data = await res.json();

            if (data.success){
                toast({
                    title: 'Joined successfully.',
                    description: 'Thanks for joining the waitlist!',
                    status: 'success'
                });
                setState("success");
                setEmail('');
            } else {
                throw new Error(data?.error || 'Something went wrong, try again later.')
            }
        } catch(e) {
            toast({
                description: (e as Error).message,
                status: 'error'
            });
            setState("initial");
        }
    }

    return (
        <Flex
            minH={'45vh'}
            align={'center'}
            justify={'center'}
            bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'>
            <Container
                maxW={'lg'}
                bg={useColorModeValue('white', 'whiteAlpha.100')}
                boxShadow={'xl'}
                rounded={'lg'}
                p={6}>
                <Heading
                    as={'h2'}
                    fontSize={{ base: 'xl', sm: '2xl' }}
                    textAlign={'center'}
                    mb={5}>
                    Get early access
                </Heading>
                <Box
                    as={'form'}
                    onSubmit={ handleFormSubmit }>
                    <FormControl>
                        <Input
                            variant={'solid'}
                            borderWidth={1}
                            color={'gray.800'}
                            _placeholder={{
                                color: 'gray.400',
                            }}
                            borderColor={useColorModeValue('gray.300', 'gray.700')}
                            id={'email'}
                            type={'email'}
                            required
                            placeholder={'Your Email'}
                            aria-label={'Your Email'}
                            value={email}
                            disabled={state !== 'initial'}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setEmail(e.target.value)
                            }
                        />
                    </FormControl>
                    <FormControl w={{ base: '100%', md: '100%' }}>
                        <Button
                            colorScheme={state === 'success' ? 'green' : 'blue'}
                            isLoading={state === 'submitting'}
                            w="100%"
                            type={state === 'success' ? 'button' : 'submit'}>
                            {state === 'success' ? <CheckIcon /> : 'Submit'}
                        </Button>
                    </FormControl>
                </Box>
                <Text
                    mt={2}
                    textAlign={'center'}
                    color={error ? 'red.500' : 'gray.500'}>
                    {error
                        ? 'Oh no an error occured! 😢 Please try again later.'
                        : "You won't receive any spam! ✌️"}
                </Text>
            </Container>
        </Flex>
    );
}