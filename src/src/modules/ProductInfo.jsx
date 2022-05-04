
import ProductDetails from "./ProductDetails";



export default function ProductInfo({pInfo}){
    

    
    const {name, price, url, info} = pInfo;

    return (

        <div className='border'>
          
            <ProductDetails url = {products[0].url} name = {name} price = {price} info = {info} />

        </div>
    )
}




