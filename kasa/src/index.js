import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/index'
import About from './pages/About/index'
import Error from './pages/404'

// Nouvelle syntaxe React 18 import ReactDom via react-dom/client
const root = document.getElementById('root')

ReactDOM.createRoot(root).render(
  // Nouvelle syntaxe "Routes" à la place de "Switch" sur react-router-dom v6.9.0
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
