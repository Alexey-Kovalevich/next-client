import Image from 'next/image'
import Link from 'next/link'
import { DrinkType } from '../../drinks/page'
import './index.scss'


type CardProps = {
  drink: DrinkType
}

const Card = ({ drink }: CardProps) => {  
  return (
    <Link href={`/drinks/${drink.id}`}>
      <div className='cart-container'>
        <Image src={drink.url} width={250} height={250} alt={`${drink.name}+${drink.id}`} style={{
          objectFit: "cover"
        }} />
        <div className='cart-info'>
          <div className='cart-detail'>
            <p>Name:</p>
            <p>{drink.name}</p>
          </div>
          <div className='cart-detail'>
            <p>Founded:</p>
            <p>{drink.dateOfFoundation}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card