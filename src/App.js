import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PokemonDetails from "./pages/PokemonDetails";
import MyPokemons from "./pages/MyPokemons";

function App() {
  const [myTeam, setMyTeam] = useState([]);

  useEffect(() => {
    let pokemons = JSON.parse(localStorage.getItem("pokemons")) || [];
    setMyTeam(pokemons);
  }, []);

  return (
    <Router>
      <ChakraProvider>
        <Navbar team={myTeam} />
        <Switch>
          <Route
            path='/myPokemons'
            render={(props) => <MyPokemons team={myTeam} {...props} />}
          />
          <Route
            path='/pokemon/:id'
            component={(props) => (
              <PokemonDetails team={myTeam} setTeam={setMyTeam} {...props} />
            )}
          />
          <Route path='/' exact component={Home} />
        </Switch>
      </ChakraProvider>
    </Router>
  );
}

export default App;
