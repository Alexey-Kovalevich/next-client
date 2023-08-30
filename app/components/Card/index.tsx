import Image from 'next/image'
import { shimmer, toBase64 } from '../../../utils/images';
import { DrinkType } from '../DrinkComponent/page'
import './index.scss'


type CardProps = {
  drink: DrinkType
}

const Card = ({ drink }: CardProps) => {
  return (
    <div className='cart-container'>
      <Image
        src={drink.url} 
        width={250} 
        height={250} 
        alt={`${drink.name}+${drink.id}`} 
        style={{
          objectFit: "cover"
        }}
        placeholder='blur'
        blurDataURL={`data:image/svg+xml;base64,${toBase64(
          shimmer('250', '250')
        )}`} 
      />
        
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
  )
}

export default Card