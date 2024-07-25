import { Button, Fieldset, Group, NumberInput, SimpleGrid, TextInput } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import type { IPeople } from "swapi-ts";
import useCharacterForm from "./useCharacterForm";

interface Props {
  character: IPeople;
}

function CharacterForm({ character }: Props) {
  const navigate = useNavigate();
  const { form, handleSubmit } = useCharacterForm(character);

  const onBackButton = () => {
    navigate(-1);
  }

  return <form onSubmit={form.onSubmit(handleSubmit)}>
    <Fieldset legend="Write your own history">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
        <NumberInput
          label="Height"
          placeholder="Height"
          key={form.key('height')}
          {...form.getInputProps('height')}
        />
        <NumberInput
          label="Mass"
          placeholder="Mass"
          key={form.key('mass')}
          {...form.getInputProps('mass')}
        />
        <TextInput
          label="Hair Color"
          placeholder="Hair Color"
          key={form.key('hair_color')}
          {...form.getInputProps('hair_color')}
        />
        <TextInput
          label="Skin Color"
          placeholder="Skin Color"
          key={form.key('skin_color')}
          {...form.getInputProps('skin_color')}
        />
        <TextInput
          label="Eye Color"
          placeholder="Eye Color"
          key={form.key('eye_color')}
          {...form.getInputProps('eye_color')}
        />
        <TextInput
          label="Birth Year"
          placeholder="Birth Year"
          key={form.key('birth_year')}
          {...form.getInputProps('birth_year')}
        />
        <TextInput
          label="Gender"
          placeholder="Gender"
          key={form.key('gender')}
          {...form.getInputProps('gender')}
        />
      </SimpleGrid>
      <Group justify="space-between" mt="lg">
        <Button type="button" onClick={onBackButton} variant="outline">Go Back</Button>
        <Button type="submit">Update info</Button>
      </Group>
    </Fieldset>
  </form>
}

export default CharacterForm;