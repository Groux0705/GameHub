import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  return (
    <form
      onSubmit={(evnet) => {
        evnet?.preventDefault();
        if (inputRef.current) setSearchText(inputRef.current?.value);
      }}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<BsSearch />} />
        <Input
          borderRadius={20}
          placeholder="Search Games..."
          ref={inputRef}
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
