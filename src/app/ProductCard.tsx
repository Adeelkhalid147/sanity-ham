"use client"
import React, { FC } from 'react'
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image"

const ProductCard: FC<{ item:any }> = ({ item }) => {
const handleAddToCart= async ()=>{
const res = await fetch("/api/cartt",{
    method:"POST",
    body: JSON.stringify({
        product_id: item._id
    })
})
const result = await res.json()
console.log(result)
}

  return (
    <>
    <Image src={urlForImage(item.image).url()} width={200} height={300} alt="product"/>
    {/* agr ksi image ka size bra ho or ksi ka chota to ye wali properties use kren gy classname mai (max-h-[200px]) (object-cover) 
    (object-botton) (object-top) ye properties use hn gey */}
    <h2>{item.title}</h2>
    <h3>{item.price}</h3>
    <button onClick={handleAddToCart} className="border py-2 px-6 rounded bg-blue-600 text-white">Add to Cart</button>
    </>
  )
}

export default ProductCard