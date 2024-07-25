import { Card, Center, Image, Skeleton, Title } from '@mantine/core';
import { extractCharacterId } from 'helpers/character';

import type { PropsWithChildren, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import type { IPeople } from 'swapi-ts';

import classes from "./Character.module.css";

interface Properties {
	character: IPeople;
}

const AVATAR_SIZE = 200;

function Container({ children }: PropsWithChildren) {
	return <Card shadow='sm' padding="lg" radius="md" withBorder className={classes.card}>{children}</Card>
}
function ImageContainer({ children }: PropsWithChildren) {
	return <Card.Section className='cursor-pointer'><Center>{children}</Center></Card.Section>
}
function CharacterTitle({ children }: PropsWithChildren) {
	return <Title order={2} ta="center" mt="sm">{children}</Title>
}

export function CharacterPlaceholder() {
	return <Container>
		<ImageContainer>
			<Skeleton mt={28} circle height={AVATAR_SIZE - 35} />
		</ImageContainer>
		<CharacterTitle>
			<Skeleton mt={10} height="28px" />
		</CharacterTitle>
	</Container>
}

export default function Character({ character }: Properties): ReactElement {
	return (
		<Container>
			<Link to={`/${extractCharacterId(character.url)}`}>
				<ImageContainer>
					<Image
						width={AVATAR_SIZE}
						height={AVATAR_SIZE}
						h={AVATAR_SIZE}
						w={AVATAR_SIZE}
						src={`https://robohash.org/${character.name}.png?size=${AVATAR_SIZE}x${AVATAR_SIZE}`}
						alt={character.name}
					/>
				</ImageContainer>
				<CharacterTitle>{character.name}</CharacterTitle>
			</Link>
		</Container>
	)
}
