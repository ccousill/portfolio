import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header.js'
import Footer from './components/Footer.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/projects",
    element: <Projects />
  },
  {
    path: "/app",
    element: <App />
  }

]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div id="App">
    <React.StrictMode>
      <Header />
      <div id="Main">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </React.StrictMode>
  </div>
);

reportWebVitals();
