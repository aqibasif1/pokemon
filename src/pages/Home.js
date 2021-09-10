import React, { useEffect, useState } from "react";
import { getPokemons } from "../services/pokemonService";
import { Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/layout";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => getAllPokemons(), []);

  const getAllPokemons = async () => {
    try {
      const { data } = await getPokemons();
      setPokemons(data.results);
      console.log(data);
    } catch (error) {}
  };

  return (
    <Box pt={130}>
      <Text fontSize='4xl' fontWeight='700' textAlign='center' mb={10}>
        Home
      </Text>

      <Box d='flex' flexWrap='wrap' justifyContent='center'>
        {pokemons.map((pokemon, index) => (
          <Box
            key={index}
            mx={10}
            my={2}
            w={200}
            maxW={200}
            borderWidth='2px'
            borderRadius='lg'
            overflow='hidden'
            borderColor='#ffcc02'
          >
            <Text textAlign='center'>{pokemon.name}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Home;
