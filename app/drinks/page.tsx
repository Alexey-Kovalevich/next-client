import type { Metadata } from 'next'
import DrinkComponent from '../components/DrinkComponent/page'

export const metadata: Metadata = {
  title: 'Drink page',
  description: 'test description',
}

const DrinksPage = (): JSX.Element => {
  return (
    <div>
      <DrinkComponent />
    </div>
  )
}

export default DrinksPage