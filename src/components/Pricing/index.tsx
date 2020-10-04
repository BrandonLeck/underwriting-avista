import React from 'react'
import { PriceOption } from 'core-avista/PriceOption'

interface IPriceOption {
  title: string
  unit: string
  price: number
  items: string[]
  textButton: string
  outlineButton?: boolean
}

interface IPricing {
  offers: IPriceOption[]
}

/**
 * Render a list of offers.
 */
export const Pricing = (props: IPricing) => (
  <div className="card-deck mb-3 text-center">
    {props.offers.map((offer) => (
      <PriceOption
        title={offer.title}
        unit={offer.unit}
        price={offer.price}
        items={offer.items}
        textButton={offer.textButton}
      />
    ))}
  </div>
)
