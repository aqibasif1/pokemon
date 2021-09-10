import React from "react";
import { Box } from "@chakra-ui/layout";
import {
  SlideFade,
  Input,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = ({ value, setValue }) => {
  return (
    <SlideFade in={true} direction='top' offsetY='20px'>
      <Box d='flex' justifyContent='center' mb={8}>
        <InputGroup w='250px' borderColor='gray.400'>
          <InputLeftElement
            pointerEvents='none'
            children={<SearchIcon color='gray.400' />}
          />
          <Input
            type='text'
            placeholder='Search'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </InputGroup>
      </Box>
    </SlideFade>
  );
};

export default SearchBar;
