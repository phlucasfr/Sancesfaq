import React from 'react'
import {
    Box,
    Text,
    Flex,
    Heading,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
} from '@chakra-ui/react';
import FAQ_LIST from './faq.json'

const faq = ({ index, setIndex }) => {
    return (
        <Flex direction="column" p="2">
            <Box mb="8">
                <Heading size="xl">Perguntas Frequentes</Heading>
            </Box>
            <Accordion allowToggle index={index}>
                {
                    FAQ_LIST.map(faq => (
                        <AccordionItem key={faq.id} name={`accordion-item-${faq.id}`}>
                            <AccordionButton onClick={() => setIndex(faq.id - 1)}>
                                <Box flex="1" textAlign="left">
                                    <Text fontWeight="semibold">{faq.question}</Text>
                                </Box>
                            </AccordionButton>
                            <AccordionPanel pb="4">
                                <iframe width="560" height="315" src={faq.answer} title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </AccordionPanel>
                        </AccordionItem>
                    ))
                }
            </Accordion>
        </Flex>
    )
}

export default faq
