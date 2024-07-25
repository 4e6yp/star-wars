import type { IPeople } from 'swapi-ts';
import { People } from 'swapi-ts';

interface PeopleResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: IPeople[]
}

export default async function getCharacters(page: number, searchInput?: string): Promise<PeopleResponse> {
	return People.getPage(page, searchInput) as Promise<PeopleResponse>;
}
