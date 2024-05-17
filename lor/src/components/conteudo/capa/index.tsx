import { Box} from '@chakra-ui/react';
import React from 'react'

function Capa() {
    return (
        <Box as='section'
        height={{base:'200px', sm:'400px'}}
        background="linear-gradient(rgba(0,0,0,1), rgba(128,128,128,1))"
        maxWidth={'1300px'} 
        margin={'auto'} // Para centralizar a caixa pai horizontalmente
    >
        <Box
            background={`url('assets/capa.png')`}
           maxW={'1300px'}
            backgroundSize="100% 100%"
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
            width="100%"
            height={{base:'200px', sm:'400px'}}
           
        />
    </Box>
    )
}

export default Capa;