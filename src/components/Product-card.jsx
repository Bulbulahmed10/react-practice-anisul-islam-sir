function Card(props) {
  const { imgSrc, productTitle, productDesc, productAmount } = props;
  return (
    <div className="card">
      <img src={imgSrc} alt="" className="product-img"></img>
      <h5 className="product-title"> {productTitle} </h5>
      <p className="product-desc"> {productDesc} </p>
      <span> Price: ${productAmount} </span>
      <button className="cart-button">add to cart</button>
    </div>
  );
}

export default Card;
