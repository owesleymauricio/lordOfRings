'use client'
import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Heading,
    IconButton,
    Link,
    useDisclosure
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { HamburgerIcon } from '@chakra-ui/icons';
import React from 'react'

function Topo() {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Flex
                maxW={'1200px'}
                height={'90px'}
                bg={'#000'}
                marginLeft={'auto'}
                marginRight={'auto'}
                justifyContent={'space-between'}
                paddingBottom={{base: '30px', sm: '0px'}}
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

                <Flex
                    align={'center'}
                    color={'#DAA520'}
                >
                    <Flex
                        display={{ base: 'none', md: 'flex' }} // Mostrar o menu na versão desktop e ocultar na versão mobile
                    >
                        <Link
                            as={NextLink}
                            href='/'
                            margin={'20px'}
                            fontWeight={'bold'}
                            _hover={{
                                transform: 'translateY(-3px)'
                            }}
                        >
                            Home
                        </Link>
                        <Link
                            as={NextLink}
                            href='/personagens'
                            margin={'20px'}
                            fontWeight={'bold'}
                            _hover={{
                                transform: 'translateY(-3px)'
                            }}
                        >
                            Characters
                        </Link>
                        <Link
                            as={NextLink}
                            href='/sobre'
                            margin={'20px'}
                            fontWeight={'bold'}
                            _hover={{
                                transform: 'translateY(-3px)'
                            }}
                        >
                            About
                        </Link>
                    </Flex>
                    <IconButton
                        backgroundColor={'#B8860B'}
                        aria-label='Abrir menu'
                        icon={<HamburgerIcon />}
                        display={{ base: 'flex', md: 'none' }} // Mostrar o ícone do hamburguer na versão mobile e ocultar na versão desktop
                        onClick={onOpen}
                        variant='ghost'

                    />
                    <Drawer
                        isOpen={isOpen}
                        placement='right'
                        onClose={onClose}
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader>Menu</DrawerHeader>
                            <DrawerBody

                            >
                                <Flex flexDirection='column'>
                                    <Link
                                        as={NextLink}
                                        href='/'
                                        margin={'20px'}
                                        fontWeight={'bold'}
                                        _hover={{
                                            transform: 'translateY(-3px)'
                                        }}
                                        onClick={onClose}

                                    >
                                        Home
                                    </Link>
                                    <Link
                                        as={NextLink}
                                        href='/personagens'
                                        margin={'20px'}
                                        fontWeight={'bold'}
                                        _hover={{
                                            transform: 'translateY(-3px)'
                                        }}
                                        onClick={onClose}

                                    >
                                        Characters
                                    </Link>
                                    <Link
                                        as={NextLink}
                                        href='/sobre'
                                        margin={'20px'}
                                        fontWeight={'bold'}
                                        _hover={{
                                            transform: 'translateY(-3px)'
                                        }}
                                        onClick={onClose}

                                    >
                                        About
                                    </Link>
                                </Flex>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </Flex>
            </Flex>
        </>
    )
}

export default Topo;