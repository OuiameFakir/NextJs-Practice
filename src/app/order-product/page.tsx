"use client";
import { useRouter } from "next/navigation";


export default function OrderProduct(){
    const router= useRouter();
   const handleOrder=()=>{
    console.log('Programmatic Navigation is successful')
    router.push("/")
    // router.replace("/")
    // router.back()
    // router.forward()
   }
   return <div>
        <h1>Product</h1>
        <button onClick={handleOrder}>Order Product</button>
    </div>
}