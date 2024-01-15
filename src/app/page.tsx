import Link from "next/link"

export default function Home(){
    const productId=100;
    return <div>
         <h2>TRY</h2>
        <Link href='/blog'>Link to Blog</Link>
        <br />
        <Link href={`/products/${productId}`} replace>Link to Products {productId}</Link>
        <br />
        <Link href='/docs'>Link to DOCS</Link>
        <br />
        <Link href='/register'>Link to Register</Link>
        <br />
        <Link href='/order-product'>Link to Order Product</Link>
        <br />
        <h1>This is The Homme Page</h1>
    </div>
}


