import {Input, Box, IconButton, useToast, Container, Flex, FormLabel, Button, Text, Select} from "@chakra-ui/react";
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import React from "react";
import { useState } from 'react'

const FormSchema = Yup.object().shape({
    playerName: Yup.string().required('Required'),
    line: Yup.number().required('Required').min(0.5, "Must be higher than 0.5").max(40, "Are you sure this is the correct line?"),
    homeCourt: Yup.number().required('Required').min(0, "Must be 0 or 1").max(1, "Must be 0 or 1"),
    assists: Yup.number().required('Required').min(0,'Must be positive').max(25, "Are you sure this is the correct stat?"),
    steals: Yup.number().required('Required').min(0,'Must be positive').max(25, "Are you sure this is the correct stat?"),
    rebounds: Yup.number().required('Required').min(0,'Must be positive').max(25, "Are you sure this is the correct stat?"),
    turnovers: Yup.number().required('Required').min(0,'Must be positive').max(25, "Are you sure this is the correct stat?"),
    threePointFGMade: Yup.number().required('Required').min(0,'Must be positive').max(25, "Are you sure this is the correct stat?"),
    threePointFGAttempted: Yup.number().required('Required').min(0,'Must be positive').max(25, "Are you sure this is the correct stat?"),
    blocks: Yup.number().required('Required').min(0,'Must be positive').max(25, "Are you sure this is the correct stat?"),
    FGA: Yup.number().required('Required').min(0,'Must be positive').max(25, "Are you sure this is the correct stat?"),
    FGM: Yup.number().required('Required').min(0,'Must be positive').max(25, "Are you sure this is the correct stat?"),
    FTA: Yup.number().required('Required').min(0,'Must be positive').max(25, "Are you sure this is the correct stat?"),
    FTM: Yup.number().required('Required').min(0,'Must be positive').max(25, "Are you sure this is the correct stat?"),
    plusMinus: Yup.number().required('Required'),
});

function PlayerForm() {
    const toast = useToast();
    const [isLoading, setIsLoading] = useState(false)
    const [prediction, setPrediction] = useState(null)

    // @ts-ignore
    const handleFormSubmit = async (values, { setSubmitting }) => {
        setIsLoading(true)
        toast({
            title: `Request sent to ${values.playerName}'s AI model.`,
            description: `We are crunching data, please wait!`,
            status: "info",
            duration: 3000,
            isClosable: true,
        });
        try {
            const predictionData = {
                LINE: values.line,
                HOME: values.homeCourt,
                AST: values.assists,
                STL: values.steals,
                REB: values.rebounds,
                TOV: values.turnovers,
                FG3M: values.threePointFGMade,
                FG3A: values.threePointFGAttempted,
                BLK: values.blocks,
                FGA: values.FGA,
                FGM: values.FGM,
                FTA: values.FTA,
                FTM: values.FTM,
                PLUS_MINUS: values.plusMinus,
            };

            const response = await fetch('http://localhost:5000/api/predict', {  // replace with your API endpoint
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(predictionData),
            });

            const data = await response.json();

            // Handle the response data
            console.log(data);
            setPrediction(data.prediction)
        } catch (error) {
            console.error('Error:', error);
        }
        setTimeout(() => {
            setIsLoading(false);
            setSubmitting(false);
        }, 9000); // disables the button for 9 seconds
    };

    // const players = [
    //     'Nikola Jokic'];
    const players = [
        'ONLY JOKIC AVAILABLE NOW', 'Nikola Jokic' /* ...more players */];


    return (
        <Box bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'>
            <Container maxW={'5xl'} maxH={"100%"} paddingBottom={'10'} paddingTop={'10'}>
                <Box
                    maxW={'1000px'}
                    w={'full'}
                    bg={'white'}
                    boxShadow={'md'}
                    rounded={'md'}
                    overflow={'hidden'}
                    p={4}>
                    <Text mb={4}>
                        This model is tailored for O/U player props and calculates a player&amp;s points with accuracy ranging from 47% - 65%.
                        Please take into consideration unquantifiable circumstances such as injuries,
                        minute limitations, foul trouble, and many more. This model is trained on thousands of data points
                        further helping you make a purely data driven decision. Always supplement a prediction with research
                        and never risk more than what you can afford to lose!

                    </Text>
                    <Formik
                        initialValues={{
                            playerName: '',
                            line: '',
                            homeCourt: '',
                            assists: '',
                            steals: '',
                            rebounds: '',
                            turnovers: '',
                            threePointFGMade: '',
                            threePointFGAttempted: '',
                            blocks: '',
                            FGA: '',
                            FGM: '',
                            FTA: '',
                            FTM:'',
                            plusMinus: '',
                        }}
                        validationSchema={FormSchema}
                        onSubmit={handleFormSubmit}>
                        <Form>
                            <Box mb={4}>
                                <FormLabel htmlFor="playerName">Player Name</FormLabel>
                                <Field as={Select} id="playerName" name="playerName" placeholder="">
                                    {players.map(player => <option key={player} value={player}>{player}</option>)}
                                </Field>

                            </Box>

                            <Box mb={4}>
                                <FormLabel htmlFor="line">Line</FormLabel>
                                <Field as={Input} id="line" name="line" placeholder="Enter line" type="number" />
                                <ErrorMessage name="line" component="div" />

                            </Box>

                            <Box mb={4}>
                                <FormLabel htmlFor="homeCourt">Home Court Advantage? (1 for home, 0 for away)</FormLabel>
                                <Field as={Input} id="homeCourt" name="homeCourt" placeholder="Enter 1 for home, 0 for away" type="number" />
                                <ErrorMessage name="homeCourt" component="div" />

                            </Box>

                            <Box mb={4}>
                                <FormLabel htmlFor="assists">Last 5 Game Average Assists:</FormLabel>
                                <Field as={Input} id="assists" name="assists" placeholder="Enter assists average" type="number" />
                                <ErrorMessage name="assists" component="div" />

                            </Box>

                            <Box mb={4}>
                                <FormLabel htmlFor="steals">Last 5 Game Average Steals:</FormLabel>
                                <Field as={Input} id="steals" name="steals" placeholder="Enter steals average" type="number" />
                                <ErrorMessage name="steals" component="div" />

                            </Box>

                            <Box mb={4}>
                                <FormLabel htmlFor="rebounds">Last 5 Game Average Rebounds:</FormLabel>
                                <Field as={Input} id="rebounds" name="rebounds" placeholder="Enter rebounds average" type="number" />
                                <ErrorMessage name="rebounds" component="div" />

                            </Box>

                            <Box mb={4}>
                                <FormLabel htmlFor="turnovers">Last 5 Game Average Turnovers:</FormLabel>
                                <Field as={Input} id="turnovers" name="turnovers" placeholder="Enter turnovers average" type="number" />
                                <ErrorMessage name="turnovers" component="div" />

                            </Box>

                            <Box mb={4}>
                                <FormLabel htmlFor="threePointFGMade">Last 5 Game Average 3-point Field Goals Made:</FormLabel>
                                <Field as={Input} id="threePointFGMade" name="threePointFGMade" placeholder="Enter 3-point FG made average" type="number" />
                                <ErrorMessage name="threePointFGMade" component="div" />

                            </Box>

                            <Box mb={4}>
                                <FormLabel htmlFor="threePointFGAttempted">Last 5 Game Average 3-point Field Goals Attempted:</FormLabel>
                                <Field as={Input} id="threePointFGAttempted" name="threePointFGAttempted" placeholder="Enter 3-point FG attempted average" type="number" />
                                <ErrorMessage name="threePointFGAttempted" component="div" />

                            </Box>

                            <Box mb={4}>
                                <FormLabel htmlFor="blocks">Last 5 Game Average Blocks:</FormLabel>
                                <Field as={Input} id="blocks" name="blocks" placeholder="Enter blocks average" type="number" />
                                <ErrorMessage name="blocks" component="div" />

                            </Box>

                            <Box mb={4}>
                                <FormLabel htmlFor="FGA">Last 5 Game Average Field Goals Attempted:</FormLabel>
                                <Field as={Input} id="FGA" name="FGA" placeholder="Enter field goals attempted average" type="number" />
                                <ErrorMessage name="FGA" component="div" />

                            </Box>

                            <Box mb={4}>
                                <FormLabel htmlFor="FGM">Last 5 Game Average Field Goals Made:</FormLabel>
                                <Field as={Input} id="FGM" name="FGM" placeholder="Enter field goals made average" type="number" />
                                <ErrorMessage name="FGM" component="div" />

                            </Box>

                            <Box mb={4}>
                                <FormLabel htmlFor="FTA">Last 5 Game Average Free Throw Attempts:</FormLabel>
                                <Field as={Input} id="FTA" name="FTA" placeholder="Enter free throw attempts average" type="number" />
                                <ErrorMessage name="FTA" component="div" />

                            </Box>
                            <Box mb={4}>
                                <FormLabel htmlFor="FTM">Last 5 Game Average Free Throw Made:</FormLabel>
                                <Field as={Input} id="FTM" name="FTM" placeholder="Enter free throw made average" type="number" />
                                <ErrorMessage name="FTM" component="div" />

                            </Box>
                            <Box mb={4}>
                                <FormLabel htmlFor="plusMinus">Last 5 Game Average +/-:</FormLabel>
                                <Field as={Input} id="plusMinus" name="plusMinus" placeholder="Enter +/- average" type="number" />
                                <ErrorMessage name="plusMinus" component="div" />

                            </Box>

                            <Button colorScheme="blue" type="submit" isLoading={isLoading}>
                                Submit
                            </Button>
                            {prediction &&  (
                                <Box mt={4}>
                                    <Text>
                                        Prediction: {prediction}
                                    </Text>
                                </Box>
                            )}
                        </Form>
                    </Formik>
                </Box>
            </Container>
        </Box>
    );
}
export default PlayerForm;