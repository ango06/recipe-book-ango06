import './App.css'

import { BrowserRouter, Routes, Route } from "react-router";
import NavBar from "./components/NavBar.tsx";
import Home from "./pages/Home.tsx";
import List from "./pages/RecipeList.tsx";
import Book from "./pages/RecipeBook.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/recipe-list" element={<List />} />
        <Route path="/recipe-book" element={<Book />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App
