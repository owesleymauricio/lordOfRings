'use client'
import Topo from '@/components/topo';
import {
  ChakraProvider,
  Flex,
  Heading,
  Text,
  Image,
  Card,
  CardBody,
  Stack,
  GridItem,
  Grid,
} from '@chakra-ui/react';
import React from 'react'
import PersonagemCard from './compPersonagem';
import Rodape from '@/components/rodape';

function Personagens() {
  return (
    <ChakraProvider>
      <Topo />



      <Grid
        background={`url('assets/imagem-personagem.png')`}
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

        {/* pssando atraves de interface para diminuir linhas 
       * e ficar mais organizado */}
        <PersonagemCard
          imagem='assets/gandalf.png'
          alt='ganfalf'
          title='Gandalf'
          descricao={`Gandalf, also known as Gandalf the Grey and later as Gandalf the White,
          is an iconic and mysterious figure in the "Lord of the Rings"
          film trilogy, directed by Peter Jackson and based on the books
          by J.R.R. Tolkien. Played by renowned actor Sir Ian
          McKellen, Gandalf is one of the most memorable and beloved
          characters in Tolkien's universe.`}
        />

        <PersonagemCard
          imagem='assets/frodo.png'
          alt='frodo'
          title='Frodo'
          descricao={`
          Frodo Baggins, a humble hobbit from the Shire, 
          inherits the One Ring and is charged with destroying it 
          in order to defeat Sauron. He embarks on an epic journey, 
          facing dangers and temptations alongside his loyal companions. 
          With courage and determination, Frodo reaches Mount Doom and,
           resisting the influence of the Ring, manages to destroy 
           it, saving Middle-earth. Despite his victory, the traumas 
           of the journey lead him to leave Middle-earth in search of
            peace in the Undying Lands. Frodo is a symbol of heroism,
             friendship and sacrifice in the "Lord of the Rings" saga.`}
        />
        <PersonagemCard
          imagem='assets/bilbo.png'
          alt='bilbo'
          title='Bilbo'
          descricao={`
          Bilbo Baggins is a hobbit from Bolson who unexpectedly
           goes on a journey with thirteen dwarves and the wizard
            Gandalf. He becomes the thief assigned to help the dwarves
             recover their treasure from the dragons. During the journey,
              Bilbo finds the One Ring and discovers his courage and 
              cunning. After returning home, he writes down his adventure
               in "The Hobbit" and lives quietly until he passes 
               the Ring on to his nephew, Frodo, beginning the events
                of "The Lord of the Rings". Bilbo is a lovable, cunning 
                and courageous figure whose adventures shape the destiny 
                of Middle-earth.`}
        />
        <PersonagemCard
          imagem='assets/tauriel.png'
          alt='tauriel'
          title='Tauriel'
          descricao={`Tauriel is a Silvan elf and captain of King 
          Thranduil's Forest Guard in "The Hobbit" trilogy. She becomes
           romantically involved with Kíli, one of the dwarves in Thorin's
            company. Its inclusion in the films adds depth to the plot,
             representing courage and compassion amid the conflicts of
              Middle Earth.`}
        />
        <PersonagemCard
          imagem='assets/galadriel.png'
          alt='galadriel'
          title='Galadriel'
          descricao={`In "Rings of Power", Galadriel is a powerful 
           elf leader of Lothlórien, gifted with wisdom and magic.
            She plays a crucial role in the resistance against Sauron
             and is a key ally in the fight against darkness. His presence 
             represents hope and light in Middle Earth during an age of 
             increasing darkness.`}
        />
        <PersonagemCard
          imagem='assets/durin.png'
          alt='durin IV'
          title='Durin IV'
          descricao={`Durin is the first of a line of dwarven kings,
            known as the Line of Durin. He founded the legendary city of 
            Khazad-dûm, where the dwarves prospered. Revered as a wise 
            and courageous leader, Durin is a pivotal figure 
            in J.R.R. Tolkien's mythology and the history of the dwarves
             in Middle Earth. His lineage plays a significant role in
             future events, including the fight against Sauron.`}
        />

      </Grid>

      {/*fim do grid preseonagen */}

      <Rodape/>
      
    </ChakraProvider>
  )
}

export default Personagens;