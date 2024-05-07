import React from 'react'
import './productcard.css'


export default function Productcard(props) {
    const {id, src, title, price, Wishlist} = props; 
    //console.log(props);
  return (
    <div key={id}>
      <div className="product-card">
            <div className="product-img">
                <img src={src} alt="" />
            </div>
            <div className="product-info">
                <p>{title}</p>
                <h3>{price}</h3>
            </div>
            {Wishlist === true && <button className="WishListBtn">Add to bag</button>}
        </div>
    </div>
  )
}
