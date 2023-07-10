'use client'
import {Box, Container, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import {Form, Formik} from "formik";
import * as Yup from 'yup'

const INITIAL_FORM_STATE = {

}

const FORM_VALIDATION = Yup.object().shape({

    })

export default function Instructions() {
    return (
        <Box bgGradient='linear(to-r, gray.300, yellow.400, pink.200)' >
            <Container maxW={'5xl'} maxH={"100%"} paddingTop={'24'}>
                <Box
                    maxW={'1000px'}
                    w={'full'}
                    boxShadow={'md'}
                    rounded={'md'}
                    overflow={'hidden'}>
                    <Tabs isFitted variant='enclosed'>
                        <TabList mb='1em'>
                            <Tab>Player Selection</Tab>
                            <Tab>Line Input</Tab>
                            <Tab>Stat Input</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <p>Select from our comprehensive collection of over 40 state-of-the-art AI models. We continually update and fine-tune our models with the most recent data to ensure exceptional predictive performance. Our vast database encompasses thousands of data points used to train our AI, facilitating unparalleled accuracy in our predictions.</p>
                            </TabPanel>
                            <TabPanel>
                                <p>Insert the line from your preferred sports market. This critical step enables our model to leverage market trends and factors in making informed predictions. By correlating your data with historical trends, our AI models can provide even more precise predictions.</p>
                            </TabPanel>
                            <TabPanel>
                                <p>After the appropriate player model is selected, it&apos;s necessary to input the player&apos;s most recent stats. Our AI models are meticulously trained on each player&apos;s comprehensive career data. However, when generating a prediction, the model uses the most recent stats to ensure greater predictive accuracy. We recommend inputting data from the player&apos;s last five games to account for variability and potential anomalies.</p>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>

            </Container>
            <Container maxW={'5xl'} maxH={"100%"}>
                <Flex
                    textAlign={'center'}
                    py={{base:16, md:24}}>
                    <Box
                        maxW={'1000px'}
                        w={'full'}
                        boxShadow={'md'}
                        rounded={'md'}
                        overflow={'hidden'}>
                        <div>
                            <Formik
                                initialValues={{
                                    ...INITIAL_FORM_STATE
                                }}
                                validationSchema={FORM_VALIDATION}
                                onSubmit={values => {
                                    console.log(values)
                                }}>
                                <Form>

                                </Form>
                            </Formik>

                        </div>
                    </Box>
                </Flex>

            </Container>
        </Box>
  )
}