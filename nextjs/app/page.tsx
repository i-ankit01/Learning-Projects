import Image from "next/image";
import axios from "axios"

async function getData(){
  setTimeout(()=>{}, 5000)
  const response = await axios.get("https://dummyjson.com/products")
  return response.data;
}

export default async function Home() {
  const userData = await getData()
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-32 h-32 border flex items-center justify-center">
            {userData.products[0].brand}
      </div>
    </div>
  );
}
