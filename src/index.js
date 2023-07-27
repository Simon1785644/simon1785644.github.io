import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link, Outlet, BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/css/index.css';
import Home from './pages/Home';
import Programing from './pages/Programing';
import Food from './pages/Tasty';
import NoPage from './pages/NoPage';
import reportWebVitals from './reportWebVitals';

const Layout = () => {
  return (
    <div>
      <header class="header_content">
        <nav class="navbar">
          <h1 class="title_logo">
              <span  style={{color:"white", backgroundColor:"#1569C7"}}>
                <img src="images/home_icon.png" alt="home-icon" />
                Locals Life
              </span>
          </h1>
          <ul class="flex-nav">
            <li>
              <Link to="/home">Locals View</Link>
            </li>
            <li>
              <Link to="/program">Programing</Link>
            </li>
            <li>
              <Link to="/tasty">Tasty</Link>
            </li> 
          </ul>
        </nav>
        <Outlet />
        <footer>
          <p>Copyright © 2023 Github service. All rights reserved.</p>
        </footer>
      </header>
    </div>
  )
};

function App () {
    return (
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" index element={<Home />} />
            <Route path="/program" element={<Programing />} />
            <Route path="/tasty" element={<Food />} />           
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('react-blog'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
