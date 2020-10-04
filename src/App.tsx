import React from 'react'
import './App.css'
import { Navbar } from 'core-avista/Navbar'

const navItems = [
  {
    href: '#home',
    description: 'Home',
    current: true,
  },
  {
    href: '#about',
    description: 'About',
    current: false,
  },
]
function App() {
  return <Navbar logo="Underwriting Avista" navItems={navItems} />
}

export default App
