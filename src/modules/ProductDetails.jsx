export default function ProductDetails({ name, url, price, info }) {

    let counter=0;

    function addToCart(){
        counter++;
        console.log(counter);
    }

    return (
    <div class = "product">
        <h2>{name}</h2>
        <img src={url} id="zoom1"/>
        <h3>{price} SEK </h3>
        <p>{info}</p>
        <h4>Add to cart</h4>
        <button onClick={addToCart} value="Increment">+</button>
        <button>-</button>
        <h4>0</h4>
    </div>
    )
}





// NUMBER INPUT FÖR ATT VÄLJA HUR MÅNGA MAN SKA KÖPA
