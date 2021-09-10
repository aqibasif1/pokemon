import http from "./httpService";

const apiEndpoint = "/pokemon";

function pokemonUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getPokemons() {
  return http.get(apiEndpoint);
}

export function getPokemon(id) {
  return http.get(pokemonUrl(id));
}

export function savePokemon(pokemon) {
  if (pokemon._id) {
    const body = { ...pokemon };
    delete body._id;
    if (body.publishDate) delete body.publishDate;
    return http.put(pokemonUrl(pokemon._id), body);
  }

  return http.post(apiEndpoint, pokemon);
}

export function deletePokemon(id) {
  return http.delete(pokemonUrl(id));
}
