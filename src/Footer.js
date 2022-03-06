import React from 'react'
import {
    Box,
    Container,
    Stack,
    Text,
    Link,
    useColorModeValue,
} from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                as={Stack}
                maxW={'6x2'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Stack direction={'row'} spacing={6}>
                    <Link href={'https://sances.com.br/'}>Home</Link>
                    <Link href={'https://sances.com.br/sobre-a-sances/'}>Sobre</Link>
                    <Link href={'https://sances.com.br/blog/'}>Blog</Link>
                    <Link href={'https://sances.com.br/contato-empresa-de-software-para-concessionaria/'}>Contato</Link>
                </Stack>
                <Text>© 2022 Phelipe Lucas. Projeto sem fins lucrativos.</Text>
            </Container>
        </Box>
    )
}

export default Footer
