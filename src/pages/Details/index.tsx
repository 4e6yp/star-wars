import { Box, Center, Container, Image, Stack, Title } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import getCharacter from 'api/getCharacter'
import Head from 'components/Head'
import { getCharacterAvatar } from 'helpers/character'
import { Navigate, useParams } from 'react-router-dom'
import DetailsNotFound from './404'
import CharacterForm from './CharacterForm'

const AVATAR_SIZE = 300;

export default function DetailsPage() {
  const { characterId } = useParams()
  const { isPending, isError, data: character } = useQuery({
    queryKey: ['character', characterId],
    queryFn: async () => getCharacter(characterId ?? '0')
  })

  if (isPending) {
    return null;
  };

  if (!characterId) {
    return <Navigate to='/' replace />
  }

  if (isError) {
    return <DetailsNotFound />
  }

  return <>
    <Head title={character.name} />

    <Container p="xl">
      <Center ta="center">
        <Stack gap="lg" w="100%">
          <Center>
            <Image className="" width={AVATAR_SIZE} height={AVATAR_SIZE} w={AVATAR_SIZE} src={getCharacterAvatar(character.name, AVATAR_SIZE)} />
          </Center>
          <Title order={1}>{character.name}</Title>
          <Box ta="left">
            <CharacterForm character={character} />
          </Box>
        </Stack>
      </Center>
    </Container>
  </>
}
