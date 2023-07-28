import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link, Outlet, BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/css/index.css';
import Navipage from './pages/Navi';
import Sidebar from './pages/Sidebar';
import News from './pages/News';
import Programing from './pages/Programing';
import Food from './pages/Tasty';
import About from './pages/About';
import NoPage from './pages/NoPage';
import reportWebVitals from './reportWebVitals';

const Layout = () => {
  return (  
    <div>
      <header class="header_banner" style={{backgroundImage:'url("./images/Cappuccino_1278x581.png")'}}>
        <nav class="top-navbar">
          <ul class="flex-nav">
            <li>
              <Link to="/">Locals Life</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/program">Programing</Link>
            </li>
            <li>
              <Link to="/tasty">Tasty</Link>
            </li> 
          </ul>
        </nav>
      </header>
      <Sidebar />
      <Outlet />
      <footer>
        <p>Copyright © 2023 Github project. All rights reserved.</p>
      </footer>
    </div>
  )
};

function App () {
    return (
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navipage />} />
            <Route path="/news" element={<News />} />
            <Route path="/program" element={<Programing />} />
            <Route path="/tasty" element={<Food />} />  
            <Route path="/about" element={<About />} />                      
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
