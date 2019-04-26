import React from 'react';
import './card.css';
import cart from '../src/assets/cart.png';
import img1 from '../src/assets/bracelets.jpg';

const Cards = () => {
	return (
		<div className="card1">
			<div className="card">
			  <div className="overflow">
			  	<img src={img1} className="card-img-top" alt="..." />
			  </div>
			  <div className="card-body">
			    <h5 className="card-title">Seven Chakras</h5>
			    <p className="card-text">This is the description of the above bracelet. This is the description of the above bracelet. </p>
			    <a href="#" className="btn btn-outline-warning">
			    		<img className="cartImage" src={cart} alt="cartImage" />Add to cart
			    </a>
			  </div>
			</div>
		</div>
		); 
}

export default Cards;