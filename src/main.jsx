import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './utils/style/GlobalStyled.jsx';
import Header from './components/Header/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <GlobalStyle />
      <Routes>
        <Route path='/' element={ <App /> } />
      </Routes>
    </Router>
  </React.StrictMode>,
)