import './App.css'

import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from './components/NavBar.tsx';
import Home from "./pages/Home.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";
import RecipeList from "./pages/RecipeList.tsx";
import RecipeBook from "./pages/RecipeBook.tsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/recipe-list" element={<RecipeList />} />
        <Route path="/recipe-book" element={<RecipeBook />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App
