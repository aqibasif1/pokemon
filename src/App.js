import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <ChakraProvider>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </ChakraProvider>
    </Router>
  );
}

export default App;
