import { Route, Routes } from "react-router-dom";

import Privacy from "./pages/Privacy";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/Home";

import Terms from "./pages/Terms";
import ContactPage from "./pages/Contact";
import CofeeShop from "./pages/CoffeeShop";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="cofeeshop" element={<CofeeShop />} />
        </Route>
      </Routes>
    </>
  );
}
