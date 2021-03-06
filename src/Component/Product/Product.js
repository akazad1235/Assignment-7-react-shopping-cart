import React from 'react';
import './Product.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {name, description, price, img} = props.product;
    // for (let i = 0; i < product.length; i++) {
    //     const element = product[i];
    //     console.log(element.name);
        
    // }
    return (
        <div className="product">
            <div className='pro'>
                <img src={img}/>
                <h3>{name}</h3>
                <p>{description}</p>
                <p><strong>Price: </strong>${price}</p>
                <button className="btn btn-success" onClick={()=> props.handleAddProduct(props.product) }><FontAwesomeIcon icon={faShoppingCart}/>Enroll Now</button>
            </div>

        </div>
    );
};

export default Product;