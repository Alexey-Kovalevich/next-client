"use client"

import React, { useState, useEffect } from 'react'
import Card from '../Card';
import './page.scss'

export type DrinkType = {
  id: string;
  name: string;
  dateOfFoundation: string;
  url: string
}

const DrinkComponent = (): JSX.Element => {
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    fetch(`${process.env.backendBaseUrl}/drinks`)
      .then((res) => res.json())
      .then((data) => {
        setDrinks(data);
      });
  }, []);

  if (!drinks.length) {
    return <div>Loading</div>
  }

  return (
    <>
      <h1 className='heading'>Drinks</h1>
      <div className='cart-wrapper'>
        {drinks.length && drinks.map((drink: DrinkType) => {
          return <Card key={drink.id} drink={drink} />
        })}
      </div>
    </>
  )
}

export default DrinkComponent