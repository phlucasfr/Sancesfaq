import React from 'react'
import { Box, Flex, Heading } from '@chakra-ui/react'

const rodape = () => {
    return (
        <Flex direction="column" p="2">
            <Box mb="8">
                <Heading size="md" textAlign="center">Encontre sua resposta usando nossa IA</Heading>
                <Heading size="sm" textAlign="center">Clique no botão do microfone abaixo</Heading>
            </Box>


        </Flex>
    )
}

export default rodape
