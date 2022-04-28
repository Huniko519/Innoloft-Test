import { BrowserRouter, Routes, Route } from "react-router-dom";

import Product from "./pages/product";
import Dashboard from "./pages/dashboard";
import Main from "./pages/main";

import { getConfiguration } from "./services/getdata";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import {
  setLogo,
  setMainColor,
  setHasUserSection,
} from "./store/reducers/innoloft";

export default function App() {
  const { data } = useQuery("config", () => getConfiguration());
  const dispath = useDispatch();
  dispath(setLogo(data?.logo));
  dispath(setMainColor(data?.mainColor));
  dispath(setHasUserSection(data?.hasUserSection));
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
