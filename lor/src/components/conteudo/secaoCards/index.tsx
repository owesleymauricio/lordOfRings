'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Card,
    Text,
    CardBody,
    CardFooter,
    Divider,
    Grid,
    GridItem,
    Heading,
    Image,
    Stack
} from '@chakra-ui/react';

interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    vote_average: number;
}

const movieTitles = [
    'The Lord of the Rings: The Fellowship of the Ring',
    'The Lord of the Rings: The Return of the King',
    'The Lord of the Rings: The Two Towers',
    'The Lord of the Rings: The Rings of Power Global Fan Screening',
    'The Hobbit: An Unexpected Journey',
    'The Hobbit: The Desolation of Smaug',
    'O Hobbit: A Batalha dos Cinco Exércitos'
];

function SecaoCards() {
   
    // Define o estado local para armazenar os filmes
    const [movies, setMovies] = useState<Movie[]>([]);

    // Efeito colateral para buscar os filmes quando o componente é montado
    useEffect(() => {
        // Função assíncrona para buscar os filmes
        async function fetchMovies() {
            try {
                // Chave da API
                const API_KEY = '1806f35d2a7aadd24f6ee64ce6b64132'; 

                const promises = movieTitles.map(async title => {
                    // Faz uma solicitação GET para buscar o filme pelo título
                    const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
                        params: {
                            api_key: API_KEY,
                            query: title,
                        },
                    });

                    // Retorna apenas o primeiro resultado da busca
                    return response.data.results[0];
                });

                // Espera que todas as promessas sejam resolvidas
                const results = await Promise.all(promises);

                // Filtra resultados vazios (filmes não encontrados) e atualiza o estado com os filmes encontrados
                const filteredResults = results.filter(movie => movie !== undefined);
                setMovies(filteredResults);
            } catch (error) {
                console.error('Erro ao buscar filmes:', error);
            }
        }

        // Chama a função para buscar os filmes quando o componente é montado
        fetchMovies();
    }, []);

    return (
        <Grid
        background={`url('assets/ohobbit.png')`}
        backgroundSize='100% 100%' // Ajusta a imagem para ocupar todo o espaço do Grid
        backgroundPosition='center'
        backgroundRepeat='no-repeat' // Evita que a imagem se repita
        maxW={'1200px'}
        marginRight={'auto'}
        marginLeft={'auto'}
            templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
            gap={4}
            justifyContent="center"
            alignItems="start"
            padding={4}
            pb={'40px'}
        >
            {/* Mapeia os filmes e renderiza um cartão para cada um */}
            {movies.map(movie => (
                <GridItem key={movie.id} maxW='sm'>
                    <Card
                    bg={'#1C1C1C'}
                    h={'830px'}
                    >
                        <CardBody
                        marginRight={'auto'}
                        marginLeft={'auto'}
                        >
                            <Image
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                alt={movie.title}
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading color={'#DAA520'} size='md'>{movie.title}</Heading>
                                <Text
                                color={'#fff'}
                                >{movie.overview}</Text>
                             
                            </Stack>
                        </CardBody>
                    </Card>
                </GridItem>
            ))}
        
        </Grid>
    )
}

export default SecaoCards;
