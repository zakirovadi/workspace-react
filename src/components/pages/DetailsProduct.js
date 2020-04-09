import React from 'react';
import './DetailsProduct.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function DetailsProducts(props) {
    const product = props.product;

    return(
        <div className="container details-product">
            <div className="img">
                <img src={product.image} alt={product.name} />
            </div>

            <div className="description">
                <h3>{product.name}</h3>
                <span className="price">${product.price}</span>
                <p>{product.description}</p>
                <div className="card">
                    <span>Add to Card</span>
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>
        </div>
    );
}

export default DetailsProducts;