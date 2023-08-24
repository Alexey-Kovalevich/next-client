import Image from "next/image";
import { shimmer, toBase64 } from '../../../utils/images';
import { FoodType } from "../page";
import './page.scss'

const getFoodItem = async (id: string): Promise<FoodType> => {
  const data = await fetch(`http://localhost:8000/food/${id}`);

  if (!data) {
    throw new Error();
  }

  return data.json();
}

const FoodPage = async ({params: {id}}: {params: {id: string}}) => {

  const foodItem = await getFoodItem(id)

  return (
    <div className="center-container">
      <Image
        src={foodItem.url}
        width={700}
        height={450}
        alt={`${foodItem.name}+${foodItem.id}`}
        style={{
          objectFit: "cover"
        }}
        placeholder='blur'
        blurDataURL={`data:image/svg+xml;base64,${toBase64(
          shimmer('650', '450')
        )}`}
      />
      <h1>{foodItem.name}</h1>
      <h4>First mention: {foodItem.firstMention}</h4>
      <p>{foodItem.description}</p>
    </div>
  )
}

export default FoodPage