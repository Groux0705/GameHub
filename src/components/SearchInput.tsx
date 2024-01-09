import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  setSearchValue: (value: string) => void;
}

const SearchInput = ({ setSearchValue }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <form
        onSubmit={(evnet) => {
          evnet?.preventDefault();
          if (inputRef.current) setSearchValue(inputRef.current?.value);
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
    </>
  );
};

export default SearchInput;
