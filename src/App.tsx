import React from 'react'
import './App.css'
import { Navbar } from 'core-avista/Navbar'
import { Pricing } from './components/Pricing'
import { navItems } from './data/navItems.json'
import { offers } from './data/offers.json'

function App() {
  return (
    <>
      <Navbar logo="Underwriting Avista" navItems={navItems} />
      <div className="container py-3">
        <div className="pb-md-4 text-center">
          <h1 className="display-4">Pricing</h1>
          <p className="lead">
            Quickly build an effective pricing table for your potential
            customers with this Bootstrap example. It’s built with default
            Bootstrap components and utilities with little customization.
          </p>
        </div>
        <Pricing offers={offers} />
      </div>
    </>
  )
}

export default App
