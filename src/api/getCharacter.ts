import type { IPeople } from 'swapi-ts';
import { People } from 'swapi-ts';


export default async function getCharacter(id: string): Promise<IPeople> {
  const response = await fetch(`${People.root}/${id}`)
  if (!response.ok) {
    throw new Error("Character not found");
  }
  return response.json() as Promise<IPeople>
}
