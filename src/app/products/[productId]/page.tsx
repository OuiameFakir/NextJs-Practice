export default function ProductDetails({params}:
    {params:
        { productId: string

        }
    }){
    return <div>
            <h2>Product {params.productId} Details</h2>
        </div>
}