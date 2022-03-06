import React from 'react'
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import Logo from './logo.png'

export

const Navbar = ({ toggleColorFlag }) => {
    return (
        <Flex align="center" boxShadow="base" p="2" mb="2">
            <Box p="2">
                <Heading size="md"> <a href="https://sances.com.br/"> <img src={Logo} alt="Suporte Sances" width="200px" /></a> </Heading>
            </Box>
            <Spacer />
            <Box>
                <ColorModeSwitcher toggleColorFlag={toggleColorFlag} />
            </Box>
        </Flex>
    )
}

export default Navbar
