export default function ProductDetails({ pInfo }) {

    const {name, url, price, info} = pInfo;

    function addToCart(){
        
    }

    return (
    <div class = "product">
        <h2>{name}</h2>
        <img src={url} id="zoom1"/>
        <h3>{price} SEK </h3>
        <p>{info}</p>
        <button onClick={addToCart}>+</button>

    </div>
    )
}





// NUMBER INPUT FÖR ATT VÄLJA HUR MÅNGA MAN SKA KÖPA
