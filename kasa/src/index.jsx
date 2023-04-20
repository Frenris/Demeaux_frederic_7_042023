import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/index'
import About from './pages/About/index'
import Error from './pages/404/index'
import Header from './components/Header/index'
import StyledGlobalStyle from './utils/style/GlobalStyle'
import Footer from './components/Footer/index'
import Grid from './components/Grid'

// Nouvelle syntaxe React 18 import ReactDom via react-dom/client
const root = document.getElementById('root')

ReactDOM.createRoot(root).render(
  // Nouvelle syntaxe "Routes" à la place de "Switch" sur react-router-dom v6.9.0
  <React.StrictMode>
    <Router>
      <StyledGlobalStyle />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/grid/:idGrid" element={<Grid />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
