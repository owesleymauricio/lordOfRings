import Rodape from '@/components/rodape';
import Topo from '@/components/topo';
import {
  ChakraProvider,
  Flex,
  Heading,
  Text
} from '@chakra-ui/react';
import React from 'react'

function Sobre() {
  return (
    <ChakraProvider>
      <Topo />

      <Flex
        flexDirection={'column'}
        background={`url('assets/imagem-sobre.png')`}
        backgroundSize='100% 100%' // Ajusta a imagem para ocupar todo o espaço do Grid
        backgroundPosition='center'
        backgroundRepeat='no-repeat' // Evita que a imagem se repita
        maxW={'1200px'}
        marginRight={'auto'}
        marginLeft={'auto'}
      >
        <Heading
          alignItems={'center'}
          color={'#DAA520'}
          fontFamily={'inherit'}
          size={'2xl'}
          gap={'5px'}
          p={'10px'}
          textAlign={'center'}
          textShadow={'5px 2px 10px #000'}
        >
          The greatest epic journey
        </Heading>
        <Text
          textAlign={'center'}
          paddingTop={'5px'}
          marginRight={'30px'}
          marginLeft={'30px'}
          color={'#B8860B'}
          textShadow={'5px 2px 10px #000'}
          fontSize={'20px'}
        >
          In a world full of wonders and intertwined dangers,
          the "Lord of the Rings" trilogy takes us on a thrilling journey
          thrilling journey through Middle-earth, where unlikely heroes
          face unimaginable challenges. Amid the glories
          of friendship, courage and sacrifice, we also encounter
          thorns that test the strength of each character.
        </Text>
        <Text
          textAlign={'center'}
          paddingTop={'5px'}
          paddingRight={'30px'}
          paddingLeft={'30px'}
          color={'#B8860B'}
          textShadow={'5px 2px 10px #000'}
          fontSize={'20px'}
        >
          From the green fields of the Shire to the dark lands of Mordor,
          every step in the journey of Frodo Baggins and his
          entourage is marked by sharp thorns. The temptation of the
          Ring, the treachery of Gollum and the betrayals of Saruman
          and Denethor are just some of the challenges that threaten
          to divert the heroes from their destiny.
        </Text>
        <Text
          textAlign={'center'}
          paddingTop={'5px'}
          paddingRight={'30px'}
          paddingLeft={'30px'}
          color={'#B8860B'}
          textShadow={'5px 2px 10px #000'}
          fontSize={'20px'}
        >
          The quest for power is a recurring thorn that haunts not
          only the villains, but also the heroes themselves. Boromir
          is consumed by lust for the Ring, while Saruman loses
          himself in unbridled ambition. Even noble Gondor faces the
          shadow of temptation, as seen in the fall of Denethor in his
          bitterness and despair.
        </Text>
        <Text
          textAlign={'center'}
          paddingTop={'5px'}
          paddingRight={'30px'}
          paddingLeft={'30px'}
          color={'#B8860B'}
          textShadow={'5px 2px 10px #000'}
          fontSize={'20px'}
        >
          As well as external challenges, the characters also face
          internal thorns, such as fear, doubt and the temptation
          to give up. Aragorn struggles against his own uncertainty
          as he tries to fulfill his destiny as King. Legolas and Gimli,
          from formerly rival races, have to overcome prejudices
          to forge a lasting friendship.
        </Text>
        <Text
          textAlign={'center'}
          paddingTop={'5px'}
          paddingRight={'30px'}
          paddingLeft={'30px'}
          color={'#B8860B'}
          textShadow={'5px 2px 10px #000'}
          fontSize={'20px'}
        >
          However, amidst the thorns, there are shining glories that
          illuminate the heroes' path. Samwise Gamgee's unbreakable
          loyalty, Gandalf's wisdom and Galadriel's strength are just
          some of the lights that guide the Entourage on their journey.
          The unity and friendship that form between the companions
          are like shining stars on a dark night.
        </Text>
        <Text
          textAlign={'center'}
          paddingTop={'5px'}
          paddingRight={'30px'}
          paddingLeft={'30px'}
          color={'#B8860B'}
          textShadow={'5px 2px 10px #000'}
          fontSize={'20px'}
        >
          In the end, it is the heroes' resilience in the face of
          thorns that makes their journey truly epic. They face the
          darkness bravely, refusing to give in to despair even in
          the darkest moments. Every thorn they overcome is a
          testament to their determination and courage.
        </Text>
        <Text
          textAlign={'center'}
          paddingTop={'5px'}
          paddingRight={'30px'}
          paddingLeft={'30px'}
          color={'#B8860B'}
          textShadow={'5px 2px 10px #000'}
          fontSize={'20px'}
        >
          Thus, "The Lord of the Rings" is much more than a story of adventure
          and fantasy. It is an emotionally profound journey that
          explores the thorns of life and the glory that comes from overcoming
          them. It is a work that reminds us that, even in the most
          difficult times, hope and friendship can prevail over darkness.
        </Text>

        {/*fim sobre senhor dos aneis */}

        <Heading
          alignItems={'center'}
          color={'#DAA520'}
          fontFamily={'inherit'}
          size={'2xl'}
          gap={'5px'}
          p={'10px'}
          textAlign={'center'}
          textShadow={'5px 2px 10px #000'}
        >
          About The Hobbit and Rings of Power
        </Heading>
        <Text
          textAlign={'center'}
          paddingTop={'5px'}
          paddingRight={'30px'}
          paddingLeft={'30px'}
          color={'#B8860B'}
          textShadow={'5px 2px 10px #000'}
          fontSize={'20px'}
        >
        In addition to the classic "Lord of the Rings" trilogy,
         the universe created by J.R.R. Tolkien has been expanded 
         with the film adaptation of "The Hobbit" and the in-development
          "Rings of Power" series, exploring new territories in
           Middle-earth and adding additional layers to the rich 
           mythology already established.
        </Text>
        <Text
          textAlign={'center'}
          paddingTop={'5px'}
          paddingRight={'30px'}
          paddingLeft={'30px'}
          color={'#B8860B'}
          textShadow={'5px 2px 10px #000'}
          fontSize={'20px'}
        >
        In "The Hobbit", we are transported back to Middle-earth
         on an adventure full of thorns and glories. Although
          it is a lighter story compared to "The Lord of the Rings",
           we still find significant challenges that test the
            limits of the characters. Bilbo Baggins, a reluctant
             hobbit, is drawn into an epic journey alongside 
             thirteen dwarves and the wizard Gandalf, facing 
             dragons, orcs and the very human greed represented by the 
             dwarf leader, Thorin Oak Shield. While the journey 
             is permeated by dangers, it is also punctuated by 
             moments of camaraderie, discovery and personal growth
              for Bilbo, who reveals himself to be an unlikely hero.
        </Text>
        <Text
          textAlign={'center'}
          paddingTop={'5px'}
          paddingRight={'30px'}
          paddingLeft={'30px'}
          color={'#B8860B'}
          textShadow={'5px 2px 10px #000'}
          fontSize={'20px'}
        >
        The "Rings of Power" series promises to delve even deeper
         into the history of Middle-earth, exploring events and
          characters that have previously remained in the shadows. 
          Set thousands of years before the events of "The Lord of the 
          Rings", the series promises to offer a broader view of the 
          mythology and history of Middle-earth, covering themes such
           as the forging of the Rings of Power, the rise of Sauron 
           and the epic battles between the free races and the forces
            of darkness.
        </Text>
        <Text
          textAlign={'center'}
          paddingTop={'5px'}
          paddingRight={'30px'}
          paddingLeft={'30px'}
          color={'#B8860B'}
          textShadow={'5px 2px 10px #000'}
          fontSize={'20px'}
        >
        Like their predecessors, "The Hobbit" and "Rings of Power" 
        will certainly present their own thorns and glories. While 
        the characters face epic challenges and seductive temptations,
         they will also find moments of triumph, friendship 
         and redemption. These works expand Tolkien's universe 
         in exciting ways, providing fans with an opportunity to 
         explore new territories in Middle-earth while continuing 
         to celebrate the enduring legacy of one of fantasy's most 
         beloved tales.
        </Text>

      </Flex>

      <Rodape />
    </ChakraProvider>
  )
}

export default Sobre;