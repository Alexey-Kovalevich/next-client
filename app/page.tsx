import Image from 'next/image'
import './page.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home page',
  description: 'test description',
}


export default function Home() {
  return (
    <div className='content'>
      <div className='content__desc'>
        <h1 className='content__heading'>Weird heading</h1>
        <p className='content__description'>Some description</p>
      </div>
      <div className='image-container'>
        <Image 
          src='https://images.unsplash.com/photo-1682685797140-c17807f8f217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' 
          alt='image' 
          width={1080}
          height={700}
          style={{
            objectFit: "cover"
          }}
         />
      </div>
    </div>
  ) 
}
