import { Center, SimpleGrid, Title } from "@mantine/core";
import Character, { CharacterPlaceholder } from "components/Character";
import type { PropsWithChildren } from "react";
import type { IPeople } from "swapi-ts";

interface CharactersPlaceholderProps {
  items: number;
}

function Container({ children }: PropsWithChildren) {
  return <SimpleGrid spacing="lg" cols={{ base: 1, xs: 2, md: 3 }} w="100%">{children}</SimpleGrid>
}

export function CharactersListPlaceholder({ items }: CharactersPlaceholderProps) {
  return <Container>
    {Array.from(Array(items).keys()).map((index) => <CharacterPlaceholder key={index} />)}
  </Container>
}

function EmptyResult() {
  return <Center mt="xl">
    <Title order={1}>Ooops, no characters found in this Galaxy...</Title>
  </Center>
}

interface Properties {
  characters: IPeople[]
}

function CharactersList({ characters }: Properties) {
  if (!characters.length) {
    return <EmptyResult />
  }

  return <Container>
    {characters.map((char) => <Character character={char} key={char.name} />)}
  </Container>
}

export default CharactersList;