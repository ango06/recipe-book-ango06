import './App.css'

import { BrowserRouter, Routes, Route } from "react-router";
import NavBar from "./components/NavBar.tsx";
import Home from "./pages/Home.tsx";
import List from "./pages/RecipeList.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";

import RecipeList from "./pages/RecipeList_fb.tsx";
import RecipeBook from "./pages/RecipeBook_fb.tsx";
import TestRecipes from "./test.tsx";

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/recipe-list" element={<List />} />
        <Route path="/recipe-book" element={<RecipeBook />} />
        <Route path="*" element={<PageNotFound />} />

        {/** TESTING THINGS HERE */}
        <Route path="/test" element={<TestRecipes />} />
        <Route path="/list" element={<RecipeList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App
