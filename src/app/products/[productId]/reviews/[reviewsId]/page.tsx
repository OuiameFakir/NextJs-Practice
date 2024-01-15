'use client'
import { notFound } from "next/navigation"
function getRandomInt(count: number){
    return Math.floor(Math.random()*count);
}

export default function ProductDetails({params}:
    {params:
        {   productId: string,
            reviewsId: string,

        }
    }){
        const random = getRandomInt(2);
        if(random ===1){
            throw new Error('Error loading review');
        }
        if(parseInt(params.reviewsId)> 100){
            notFound();
        }
    return <div>
            <h2>Review {params.reviewsId} for Product {params.productId}</h2>
        </div>
}