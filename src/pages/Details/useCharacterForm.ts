import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import type { IPeople } from "swapi-ts";

const getLocalStorageKey = (characterId: string) => `star-wars-char-${characterId}`

const useInitialValues = (character: IPeople, characterId?: string) => useMemo(() => {
  if (!characterId) return character;

  let initialValues = character;

  const lsKey = getLocalStorageKey(characterId);
  try {
    const cachedValue = localStorage.getItem(lsKey);
    if (cachedValue) {
      initialValues = JSON.parse(cachedValue) as IPeople;
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Parsing cached value ${lsKey} failed`, error);
  }

  return initialValues;
}, [character, characterId])

const useCharacterForm = (character: IPeople) => {
  const { characterId } = useParams();
  const initialValues = useInitialValues(character, characterId);
  const form = useForm({
    mode: "uncontrolled",
    initialValues,
  })

  const handleSubmit = (values: IPeople) => {
    if (!characterId) return;

    localStorage.setItem(getLocalStorageKey(characterId), JSON.stringify(values));
    notifications.show({
      title: "Updated Successfully",
      message: `${character.name} got a brand new look! 🤩`
    })
  }

  return {
    form,
    handleSubmit
  }
}

export default useCharacterForm;