import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import NoMatch from "./pages/NoMatch";
import Beers from "./pages/Beers";
import Beer from "./pages/Beer";
import { useEffect, useState } from "react";
import { Spirit } from "./interfaces/spirits";

function App() {
  const [beers, setBeers] = useState<Spirit[]>([]);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const result = await fetch("https://ih-beers-api2.herokuapp.com/beers");
        const data = await result.json();
        setBeers(data);
      } catch (error) {
        console.error("Error fetching beers:", error);
      }
    };

    fetchBeers();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="/" element={<Home beers={beers} />} />
            <Route path="/beers/:beerId" element={<Beer />} />
            <Route path="/beers" element={<Beers beers={beers} />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
