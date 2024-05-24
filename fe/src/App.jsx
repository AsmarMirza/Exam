import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import MainLayout from "./layout/MainLayout";
import {  HelmetProvider } from 'react-helmet-async';
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import Add from "./pages/Add";
import Wishlist from "./pages/Wishlist";
import Detail from "./pages/Detail";
import BasketProvider from "./context/BasketProvider";
import WishlistProvider from "./context/WishlistProvider";

function App() {


  return (
    <>

      <HelmetProvider>
        <BasketProvider>
          <WishlistProvider>
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/add" element={<Add />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </WishlistProvider>
    </BasketProvider>
    </HelmetProvider>
    </>
  )
}

export default App
