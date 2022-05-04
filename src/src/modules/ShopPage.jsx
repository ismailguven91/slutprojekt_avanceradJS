import HomePage from "./Homepage";
import ProductDetails from "./ProductDetails";


export default function ShopPage({ updateLogInStatus, name}) {

    const Product1 = {
        name: "Rolex Oyster Perpetual Datejust",
        url: "https://www.md-watches.com/wp-content/uploads/2019/10/Rolex-79174-5.jpg",
        price: 188200,
        info: "The Datejust’s enduring aesthetics make it instantly recognizable. The characteristic shape of the Oyster case, the 18 kt gold fluted bezel, the Cyclops lens over the date and the five-piece link Jubilee bracelet – specially made for the model – all contributed to making this watch a classic."
    }

    const Product2 = {
        name: "Rolex Oyster Perpetual Datejust ref. 69173 diamonds - 26mm",
        url: "https://www.md-watches.com/wp-content/uploads/2019/06/Rolex-69173-diamond-grey-3.jpg",
        price: 119400,
        info: "Feminine elegance at superlative, chronometer certified by a flawless and iconic accurate date display window , which change almost magical at midnight. It is one of the finest women’s watches, since 1957. The small dimensions make this model a manufacturing jeweler Rolex Jubilee Bracelet in agreement with 18k yellow gold and steel. The model is a compliment of sophisticated elegance with 10 diamonds, signed Rolex."

    }
    const Product3 = {
        name: "Rolex Oyster Perpetual Datejust ref. 69173 - 26mm",
        url: "https://www.md-watches.com/wp-content/uploads/2017/12/Rolex-Oyster-Perpetual-Datejust-steel-1-.jpg",
        price: 119400,
        info: "Feminine elegance at superlative, chronometer certified by a flawless and iconic accurate date display window , which change almost magical at midnight. It is one of the finest women’s watches, since 1957. The small dimensions make this model a manufacturing jeweler Rolex Jubilee Bracelet in agreement with 18k yellow gold and steel. The model is a compliment of sophisticated elegance, signed Rolex."

    }
    const Product4 = {
        name: "Rolex Oyster Perpetual Datejust Diamonds",
        url: "https://www.md-watches.com/wp-content/uploads/2017/12/Rolex-Oyster-Perpetual-Datejust-diamonds-1.jpg",
        price: 124500,
        info: "Feminine elegance at superlative, chronometer certified by a flawless and iconic accurate date display window , which change almost magical at midnight. It is one of the finest women’s watches, since 1957. The small dimensions make this model a manufacturing jeweler Rolex Jubilee Bracelet in agreement with 18k white gold and steel case. The model is a compliment of sophisticated elegance with 10 diamonds, signed by Rolex."

    }

    const Product5 = {
        name: "Rolex Oyster Perpetual Datejust ref. 69174 black - 26mm",
        url: "https://www.md-watches.com/wp-content/uploads/2019/10/Rolex-69174-roman-5.jpg",
        price: 99800,
        info: "Feminine elegance at superlative, chronometer certified by a flawless and iconic accurate date display window , which change almost magical at midnight. It is one of the finest women’s watches, since 1957. The small dimensions make this model a manufacturing jeweler Rolex Jubilee Bracelet in agreement with 18k white gold and steel case. The model is a compliment of sophisticated elegance with 10 diamonds, signed by Rolex."

    }

    function handleClick(event) {
        event.preventDefault();
        updateLogInStatus();
    }


    return (
        <>
            <h1>{name}</h1>
            <ProductDetails pInfo ={Product1}/>
            <ProductDetails pInfo ={Product2}/>
            <ProductDetails pInfo ={Product3}/>
            <ProductDetails pInfo ={Product4}/>
            <ProductDetails pInfo ={Product5}/>

            <button onClick={handleClick}>Log Out</button>
        </>
    )
}