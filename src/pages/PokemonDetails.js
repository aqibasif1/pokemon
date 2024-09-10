import React, { useEffect, useState } from "react";
import { Box, Text, SlideFade, Button } from "@chakra-ui/react";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import { getPokemon } from "../services/pokemonService";
import AbilitiesAndStats from "../components/AbilitiesAndStats";
import DetailsTopSection from "../components/DetailsTopSection";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";

const PokemonDetails = ({ match, team, setTeam }) => {
  const { id: pokemonId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonDetails, setPokemonDetails] = useState({});

  useEffect(() => getPokemonDetails(pokemonId), [pokemonId]);

  const getPokemonDetails = async (pokemonId) => {
    setIsLoading(true);
    try {
      const { data } = await getPokemon(pokemonId);
      setPokemonDetails(data);
    } catch (error) {}
    setIsLoading(false);
  };

  const isAlreadyPresent = () => team.some((t) => t.id === pokemonDetails.id);

  const isTeamFull = () => team.length >= 6;

  const handleClick = () => {
    let newPokemons = isAlreadyPresent()
      ? [...team.filter((t) => t.id !== pokemonDetails.id)]
      : [...team, pokemonDetails];

    setTeam(newPokemons);
    localStorage.setItem("pokemons", JSON.stringify(newPokemons));
  };

  return isLoading ? (
    <Loader />
  ) : (
    <Box pt={150}>
      <DetailsTopSection pokemon={pokemonDetails} />

      <AbilitiesAndStats pokemon={pokemonDetails} />

      <SlideFade in={true} offsetY='10px'>
        {isTeamFull() && !isAlreadyPresent() && (
          <Text
            textAlign='center'
            mt={10}
            mb={5}
            color='green'
            fontSize='xl'
            px={2}
          >
            Your team is full, you can't add more than 6 pokemons!
          </Text>
        )}
        {isAlreadyPresent() && (
          <Text textAlign='center' mt={10} mb={-5} color='green' fontSize='xl'>
            Added in my team!
          </Text>
        )}

        {(!isTeamFull() || isAlreadyPresent()) && (
          <Box d='flex' justifyContent='center' mb={9} mt={10}>
            <Button
              size='lg'
              variant='solid'
              onClick={handleClick}
              colorScheme={isAlreadyPresent() ? "pink" : "green"}
              leftIcon={isAlreadyPresent() ? <CloseIcon /> : <AddIcon />}
            >
              {isAlreadyPresent() ? "Remove from team" : "Add in team"}
            </Button>
          </Box>
        )}
      </SlideFade>
    </Box>
  );
};

export default PokemonDetails;
