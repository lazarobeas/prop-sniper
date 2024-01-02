import React from 'react';
import {
    Flex,
    Box,
    chakra,
    Image, Stack // Import the Image component from Chakra UI
} from '@chakra-ui/react';


export default function FreeTrialCard() {
    return (
        <Flex
            bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'
            w={'100%'}
            minH={{base:'80vh', md:'87vh', sm:'80vh'}}
            direction={{
                base: "column",
                md: "row",
            }}
            px={8}
            py={24}
            mx="auto"
        >
            <Box

                w={{
                    base: "full",
                    md: 11 / 12,
                    xl: 9 / 12,
                }}
                mx="auto"
                pr={{
                    md: 20,
                }}
            >
                <chakra.h2
                    fontSize={{
                        base: "3xl",
                        sm: "4xl",
                    }}
                    fontWeight="extrabold"
                    lineHeight="shorter"
                    color="red"
                    _dark={{
                        color: "gray.100",
                    }}
                    mb={6}
                >
                    <chakra.span display="block">Ready to dive in?</chakra.span>
                    <chakra.span
                        display="block"
                        color="black"
                        _dark={{
                            color: "gray.500",
                        }}
                    >
                        Start your free trial today.
                    </chakra.span>
                </chakra.h2>
                <chakra.p
                    mb={6}
                    fontSize={{
                        base: "lg",
                        md: "xl",
                    }}
                    color="gray.600"
                    _dark={{
                        color: "gray.600",
                    }}
                >
                    PropSniper Discord Bot will add value to your discord community thus increasing engangement. Our
                    bot effectively relays every single bump on the Prizepicks board and sends it to your
                </chakra.p>
                <Stack
                    direction={{
                        base: "column",
                        sm: "row",
                    }}
                    mb={{
                        base: 4,
                        md: 8,
                    }}
                    spacing={2}
                >
                </Stack>
            </Box>
            <Box
                w={{
                    base: "full",
                    md: 10 / 12,
                }}
                mx="auto"
                textAlign="center"
            >
                <Image
                    w="full"
                    rounded="lg"
                    shadow="2xl"
                    src="tyresenba1h.png"
                    alt="nba market updates discord bot"
                />
                <Image
                    w="full"
                    rounded="lg"
                    shadow="2xl"
                    src="moralessoccer.png"
                    alt="Market Updates Discord"
                />
            </Box>
            <Box display="inline-flex" rounded="md" shadow="md">
                <chakra.a
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    px={5}
                    py={3}
                    border="solid transparent"
                    fontWeight="bold"
                    w="full"
                    rounded="md"
                    _light={{
                        color: "white",
                    }}
                    bg="brand.600"
                    _dark={{
                        bg: "brand.500",
                    }}
                    _hover={{
                        bg: "brand.700",
                        _dark: {
                            bg: "brand.600",
                        },
                    }}
                >
                    Sign up for free
                </chakra.a>
            </Box>
        </Flex>
    )
}