import React, { useEffect, useState } from "react";
import { getPokemons } from "../services/pokemonService";
import { Box } from "@chakra-ui/layout";
import { Text, ScaleFade, SlideFade } from "@chakra-ui/react";
import PokemonNameBox from "../components/PokemonNameBox";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => getAllPokemons(), []);

  useEffect(() => {
    searchPokemons();
    // eslint-disable-next-line
  }, [query]);

  const getAllPokemons = async () => {
    setIsLoading(true);
    try {
      const { data } = await getPokemons();
      setPokemons(data.results);
      setSearchResult(data.results);
    } catch (error) {}
    setIsLoading(false);
  };

  const searchPokemons = () => {
    let newPokemons = [...pokemons];
    if (query) newPokemons = newPokemons.filter((p) => p.name.includes(query));
    setSearchResult(newPokemons);
  };

  const pokemonId = (url) => {
    const arr = url.split("/");
    return arr[arr.length - 2];
  };

  return isLoading ? (
    <Loader />
  ) : (
    <Box pt={150}>
      <ScaleFade in={true} initialScale={0.9}>
        <Text fontSize='4xl' fontWeight='700' textAlign='center' mb={6}>
          Home
        </Text>
      </ScaleFade>

      <SearchBar value={query} setValue={setQuery} />

      <SlideFade in={true} offsetY='80px'>
        <Box d='flex' flexWrap='wrap' justifyContent='center' mb={5}>
          {searchResult.map(({ url, name }) => (
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
