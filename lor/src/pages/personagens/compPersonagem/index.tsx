import {
    Card,
    CardBody,
    ChakraProvider,
    GridItem,
    Heading,
    Stack,
    Text,
    Image
} from '@chakra-ui/react';
import React from 'react'


interface personagens {
    imagem?: any,
    alt?:string,
    title?: string,
    descricao?: string
}

const PersonagemCard: React.FC<personagens> = ({
    imagem,
    title,
    descricao,
    alt
}) => {
    return (
        <ChakraProvider>
            <GridItem maxW='sm'>
                <Card bg={'#1C1C1C'} h={'830px'}>
                    <CardBody marginRight={'auto'} marginLeft={'auto'}>
                        <Image src={imagem} 
                        align={'center'}
                        alt={alt} 
                        borderRadius='lg' 
                        h={'300px'}
                       />
                        <Stack mt='6' spacing='3'>
                            <Heading color={'#DAA520'} size='lg' textAlign={'center'}>
                                {title}
                            </Heading>
                            <Text>{descricao}</Text>
                        </Stack>
                    </CardBody>
                </Card>
            </GridItem>
        </ChakraProvider>
    )
}

export default PersonagemCard;