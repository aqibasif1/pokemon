import React, { useEffect, useState } from "react";
import { getPokemon } from "../services/pokemonService";
import { Box } from "@chakra-ui/layout";
import { Text, ScaleFade, SlideFade, Heading, Button } from "@chakra-ui/react";
import Loader from "../components/Loader";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import AbilitiesAndStats from "../components/AbilitiesAndStats";

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
      console.log(data);
    } catch (error) {}
    setIsLoading(false);
  };

  console.log(team);

  const capitalize = (str) => (str ? str[0].toUpperCase() + str.slice(0) : "");

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
      <ScaleFade in={true} initialScale={0.9}>
        <Heading textAlign='center' mb={6} size='2xl'>
          {capitalize(pokemonDetails?.name)}
        </Heading>

        <Text textAlign='center'>
          <b>Weight:</b> {pokemonDetails?.weight}
        </Text>
        <Text textAlign='center'>
          <b>Height:</b> {pokemonDetails?.height}
        </Text>
        <Text textAlign='center' mb={6}>
          <b>Order:</b> {pokemonDetails?.order}
        </Text>
      </ScaleFade>

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
