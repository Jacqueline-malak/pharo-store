import Head from 'next/head'
import { Image } from "@nextui-org/react";



export default function Home() {
  return (
    <div>
      <div className='Indexcontainer'>
        <Image
        width={500}
        height={500}  
        src="radioPharoh.png"
        alt="Default Image"
        objectFit="cover"
      />
      </div>
      <div className='container'>

      </div>
    </div>
    
  )
}
