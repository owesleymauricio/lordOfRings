import Conteudo from "@/components/conteudo";
import Rodape from "@/components/rodape";
import Topo from "@/components/topo";
import { Flex } from "@chakra-ui/react";


export default function Home() {
  return (
    <>
      <Topo />
      <Conteudo/>
      <Rodape/>
    </>
  );
}
