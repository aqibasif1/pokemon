import React, { useEffect, useState } from "react";
import { getPokemons } from "../services/pokemonService";
import { Box } from "@chakra-ui/layout";
import { Text, ScaleFade, SlideFade } from "@chakra-ui/react";
import PokemonNameBox from "../components/PokemonNameBox";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => getAllPokemons(), []);

  const getAllPokemons = async () => {
    try {
      const { data } = await getPokemons();
      setPokemons(data.results);
    } catch (error) {}
  };

  const pokemonId = (url) => {
    const arr = url.split("/");
    return arr[arr.length - 2];
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
          {pokemons.map(({ url, name }) => (
            <PokemonNameBox
              key={pokemonId(url)}
              id={pokemonId(url)}
              name={name}
            />
          ))}
        </Box>
      </SlideFade>
    </Box>
  );
};

export default Home;
