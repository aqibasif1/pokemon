import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";

const PokemonNameBox = ({ id, name }) => {
  const capitalize = (str) => (str ? str[0].toUpperCase() + str.slice(1) : "");

  return (
    <Link to={`/pokemon/${id}`}>
      <Box
        p={3}
        mx={10}
        my={2}
        w={200}
        maxW={200}
        borderWidth='2px'
        borderRadius='lg'
        overflow='hidden'
        borderColor='#ffcc02'
      >
        <Text textAlign='center'>{capitalize(name)}</Text>
      </Box>
    </Link>
  );
};

export default PokemonNameBox;
