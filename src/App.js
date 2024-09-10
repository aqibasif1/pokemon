import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PokemonDetails from "./pages/PokemonDetails";
import MyPokemons from "./pages/MyPokemons";
import Footer from "./components/Footer";

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
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/myPokemons' element={<MyPokemons team={myTeam} />} />
          <Route
            path='/pokemon/:id'
            element={<PokemonDetails team={myTeam} setTeam={setMyTeam} />}
          />
        </Routes>
        <Footer />
      </ChakraProvider>
    </Router>
  );
}

export default App;
