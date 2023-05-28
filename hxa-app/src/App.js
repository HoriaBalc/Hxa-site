import './App.css';
import ResponsiveAppBar from './components/navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React from 'react';
import useState from 'react';
import AboutUsPage from './pages/AboutUsPage/index.jsx';
import HomePage from './pages/HomePage/index.jsx';
import ContactPage from './pages/ContactPage/index.jsx';
import { Container } from '@mui/material';
import * as routes from "./routes.js";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
      path: "/despreNoi",
      element: <AboutUsPage/>,
      path: "/contact",
      element: <ContactPage/>,
    },
  ]);

  return (
    
      <React.StrictMode>
        {/* <ResponsiveAppBar/> */}
        {/* <RouterProvider router={router} /> */}

        <Router>
          <Routes>
             <Route  path={routes.aboutUs} exact element={<AboutUsPage />} />
             <Route  path={routes.home} exact element={<HomePage />} />
             <Route  path={routes.contact} exact element={<ContactPage />} />
          </Routes>
        </Router>
      </React.StrictMode>
      
  );
}

export default App;
