import React, { useEffect, useState } from "react";
import { getPokemon } from "../services/pokemonService";
import { Box } from "@chakra-ui/layout";
import { Text, SlideFade, Button } from "@chakra-ui/react";
import Loader from "../components/Loader";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import AbilitiesAndStats from "../components/AbilitiesAndStats";
import DetailsTopSection from "../components/DetailsTopSection";

const PokemonDetails = ({ match, team, setTeam }) => {
  const pokemonId = match.params.id;
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

  const handleClick = () =>
    setTeam(
      isAlreadyPresent()
        ? [...team.filter((t) => t.id !== pokemonDetails.id)]
        : [...team, pokemonDetails]
    );

  return isLoading ? (
    <Loader />
  ) : (
    <Box pt={150}>
      <DetailsTopSection pokemon={pokemonDetails} />

      <AbilitiesAndStats pokemon={pokemonDetails} />

      <SlideFade in={true} offsetY='10px'>
        {isAlreadyPresent() && (
          <Text textAlign='center' mt={10} mb={-5} color='green' fontSize='xl'>
            Added in my team!
          </Text>
        )}

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
      </SlideFade>
    </Box>
  );
};

export default PokemonDetails;
