import React, { useEffect, useState } from "react";
import { getPokemons } from "../services/pokemonService";
import { Box } from "@chakra-ui/layout";
import { Text, ScaleFade, SlideFade } from "@chakra-ui/react";

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
    <Box pt={150}>
      <ScaleFade in={true} initialScale={0.9}>
        <Text fontSize='4xl' fontWeight='700' textAlign='center' mb={6}>
          Home
        </Text>
      </ScaleFade>

      <SlideFade in={true} offsetY='80px'>
        <Box d='flex' flexWrap='wrap' justifyContent='center'>
          {pokemons.map((pokemon, index) => (
            <Box
              key={index}
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
              <Text textAlign='center'>{pokemon.name}</Text>
            </Box>
          ))}
        </Box>
      </SlideFade>
    </Box>
  );
};

export default Home;
