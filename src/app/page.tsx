import Image from "next/image";
import { Image as iImage} from "sanity";
import {client} from "../lib/sanityClient"
import { urlForImage } from "../../sanity/lib/image"
import ProductCard from "./ProductCard";



export const getProductData = async () => {
  const res = await client.fetch(`*[_type=="product"]{
    title,
    description,
    price,
    _id,
    title,
    image,
    category ->{name}
  }`);
  // title or description object mai likhne se sirf title or description he show hn gy
  // type mai wo name ae ga jo schema mai hm ne likha tha jse as mai 'product'
  return res
}

interface Iproduct {
  title:string,
  _id:string,
  price:number,
  description:string,
  image:iImage,     // next image or sanity image same the to error arha tha as liye as ka name Interface Image(iImage) rakh dia
  category:{
    name:string
  }
}



export default async function Home() {
  const data:Iproduct[] = await getProductData()

  return (
    <div className="grid grid-cols-[repeat(3,auto)] justify-center gap-x-10">
{data.map((item,index)=>(
  <div key={index}>
 <ProductCard item={item}/>
  </div>
))}
    </div>
     )
}
