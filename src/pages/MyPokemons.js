import React from "react";
import { Box } from "@chakra-ui/layout";
import { Text, ScaleFade, SlideFade } from "@chakra-ui/react";
import PokemonNameBox from "../components/PokemonNameBox";

const MyPokemons = ({ team }) => {
  return (
    <Box pt={150}>
      <ScaleFade in={true} initialScale={0.9}>
        <Text fontSize='4xl' fontWeight='700' textAlign='center' mb={6}>
          My Pokemons
        </Text>
      </ScaleFade>

      <SlideFade in={true} offsetY='80px'>
        <Box d='flex' flexWrap='wrap' justifyContent='center'>
          {team.length ? (
            team.map(({ id, name }) => (
              <PokemonNameBox key={id} id={id} name={name} />
            ))
          ) : (
            <Text fontSize='md'>Team is empty!</Text>
          )}
        </Box>
      </SlideFade>
    </Box>
  );
};

export default MyPokemons;
