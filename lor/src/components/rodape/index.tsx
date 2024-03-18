import { Flex, Heading,Text } from '@chakra-ui/react';
import React from 'react'

function Rodape() {
  return (
    <Flex
    h={'200px'}
    flexDirection={'column'}
    bg={'#000'}
    justifyContent={'center'}
    align={'center'}
    >
      <Heading
        alignItems={'center'}
        color={'#DAA520'}
        fontFamily={'inherit'}
        size={'2xl'}
        gap={'5px'}
        p={'10px'}

      >
        The Lord of the Rings
      </Heading>
      <Text
        alignItems={'center'}
        color={'#DAA520'}
        fontFamily={'inherit'}
      >
       pagina criada por:
      </Text>
      <Text
        alignItems={'center'}
        color={'#DAA520'}
        fontFamily={'inherit'}
      >
        wesley mauricio de Andrade
      </Text>
    </Flex>
  )
}

export default Rodape;