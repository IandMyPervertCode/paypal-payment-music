import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useRoutes } from './routes'
import { Navbar } from './components/Navbar'
import { CartProvider } from './context/CartContext'
import { Parallax } from './components/Parallax'
import 'materialize-css'

function App() {

  const routes = useRoutes()
  return (
    <CartProvider>
      <Router>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
          <Parallax />
          <Navbar />
          <div className = "container">
            {routes}
          </div>
      </Router>
    </CartProvider>
  )
}

export default App
