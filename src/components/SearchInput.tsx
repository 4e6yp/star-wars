import { Input } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import type { ChangeEvent } from "react";

interface Props {
  onValueChange: (newValue: string) => void;
}
function SearchInput({ onValueChange }: Props) {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    onValueChange(event.target.value);
  }
  return <Input onChange={onChange} leftSection={<IconSearch size={32} />} miw="100%" size="xl" placeholder='Search for your favourite character' type="text" />
}

export default SearchInput;