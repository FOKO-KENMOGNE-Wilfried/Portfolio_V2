import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './utils/style/GlobalStyled.jsx';
import Header from './components/Header/index.jsx';
import Skills from './pages/Skills/index.jsx';
import Project from './pages/Project/index.jsx';
import Contacts from './pages/Contacts/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <GlobalStyle />
      <Routes>
        <Route path='/' element={ <App /> } />
        <Route path='/skills' element={ <Skills /> } />
        <Route path='/projects' element={ <Project /> } />
        <Route path='/contacts' element={ <Contacts /> } />
      </Routes>
    </Router>
  </React.StrictMode>,
)