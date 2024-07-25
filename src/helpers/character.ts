export const extractCharacterId = (url: string) => /\/(?<id>\d+)\/$/.exec(url)?.groups?.id ?? 1;

export const getCharacterAvatar = (name: string, size: number) => `https://robohash.org/${name}.png?size=${size}x${size}`