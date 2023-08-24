import React from 'react'
import FoodCard from '../components/FoodCard';
import type { Metadata } from 'next'
import './page.scss'

export type FoodType = {
  id: string;
  name: string;
  firstMention: string;
  url: string
  description: string
}

export const metadata: Metadata = {
  title: 'Home page',
  description: 'test description',
}

const getFood = async () => {
  const data = await fetch('http://localhost:8000/food');

  if (!data) {
    throw new Error();
  }

  return data.json()
}

const Food = async () => {
  const food = await getFood()
   
  return (
    <>
      <h1 className='heading'>Food</h1>
      <div className='cart-wrapper'>
        {food.length && food.map((foodItem: FoodType) => {
          return <FoodCard key={foodItem.id} foodItem={foodItem} />
        })}
      </div>
    </>
  )
}

export default Food