import './App.css'

import { BrowserRouter, Routes, Route } from "react-router";
import NavBar from "./components/NavBar.tsx";
import Home from "./pages/Home.tsx";
import List from "./pages/List.tsx";
import Book from "./pages/Book.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";

import NewRecipe from './pages/NewRecipe.tsx';
import DishOverlay from './pages/DishOverlay.tsx';


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/recipe-list" element={<List />} />
        <Route path="/recipe-book" element={<Book />} />
        <Route path="*" element={<PageNotFound />} />

        {/* TEMP */}
        <Route path="/dish-overlay" element={<DishOverlay />} />
        <Route path="/new-recipe" element={<NewRecipe />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App
