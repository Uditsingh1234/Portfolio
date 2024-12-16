import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, SetPortfolioData, ShowLoading, ReloadData } from "./redux/rootSlice";
import Admin from "./pages/admin/Admin";
import AdminLogin from "./pages/admin/AdminLogin";
import Hireme from "./pages/Hireme";

function App() {
  const { loading, portfolioData, reloadeData } = useSelector((state) => state.root)
  const dispatch = useDispatch();

  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.get(`${import.meta.env.VITE_API_RENDER_LINK}/api/portfolio/get-portfolio-data`);
      // console.log(response.data); 
      dispatch(HideLoading());  
      dispatch(SetPortfolioData(response.data));
    } catch (error) {
      console.log("Error fetching portfolio data:", error);
      dispatch(reloadeData(false)); //
      dispatch(HideLoading());
    }
  };

  // useEffect(() => {
  //   getPortfolioData();
  // }, []);

  useEffect(() => {
    if (!portfolioData) {
      getPortfolioData();
    }
  }, [portfolioData])

  useEffect(() => {
    if (reloadeData) {
      getPortfolioData();
    }
  }, [reloadeData])

  return (
    <BrowserRouter>
      {loading ? <Loader />: null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/hire-me" element={<Hireme />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
