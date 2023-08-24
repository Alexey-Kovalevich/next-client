import Image from 'next/image'
import Link from 'next/link'
import { shimmer, toBase64 } from '../../../utils/images';
import { FoodType } from '../../food/page'
import './index.scss'


type CardProps = {
  foodItem: FoodType
}

const FoodCard = ({ foodItem }: CardProps) => {
  return (
    <Link href={`/food/${foodItem.id}`}>
      <div className='food-cart-container'>
        <Image
          src={foodItem.url} 
          width={250} 
          height={250} 
          alt={`${foodItem.name}+${foodItem.id}`} 
          style={{
            objectFit: "cover"
          }}
          placeholder='blur'
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer('250', '250')
          )}`} 
        />
          
        <div className='food-cart-info'>
          <div className='food-cart-detail'>
            <p>Name:</p>
            <p>{foodItem.name}</p>
          </div>
          <div className='food-cart-detail'>
            <p>Founded:</p>
            <p>{foodItem.firstMention}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default FoodCard