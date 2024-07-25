import { Center, Container, Image, Pagination, Stack } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import getCharacters from 'api/getCharacters'
import Head from 'components/Head'
import LoadingOrError from 'components/LoadingOrError'
import SearchInput from 'components/SearchInput'
import { startTransition, useMemo, useState, type ReactElement } from 'react'
import CharactersList, { CharactersListPlaceholder } from './CharactersList'

const INITIAL_PAGE = 1;
const DEFAULT_PAGE_SIZE = 10;

export default function GalleryPage(): ReactElement {
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(INITIAL_PAGE);
  const { isPending, isError, error, data } = useQuery({
    queryKey: ['characters', page, searchInput],
    queryFn: async () => getCharacters(page, searchInput),
  })

  const onPageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo(0, 0);
  }

  const onSearchInput = (query: string) => {
    startTransition(() => {
      setSearchInput(query);

      if (page > 0) {
        setPage(INITIAL_PAGE);
      }
    })
  }

  const totalPages = useMemo(() => {
    if (!data) return 0;

    return Math.ceil(data.count / Math.max(DEFAULT_PAGE_SIZE, data.results.length))
  }, [data])

  if (isError) {
    return <LoadingOrError error={error} />
  }

  return (
    <>
      <Head title='Characters list' />
      <Container p="xl" className="flex items-center">
        <Stack justify="flex-start" align="center" gap="xl" mt="lg">
          <Center>
            <Image src="/StarWarsLogo.png" w={400} h="214" width={400} height={214} />
          </Center>
          <SearchInput onValueChange={onSearchInput} />
          {
            isPending
              ? <CharactersListPlaceholder items={DEFAULT_PAGE_SIZE} />
              : <CharactersList characters={data.results} />
          }
          {
            totalPages > 0
              ? <Pagination size="xl" value={page} onChange={onPageChange} total={totalPages} />
              : null
          }
        </Stack>
      </Container>
    </>
  )
}
