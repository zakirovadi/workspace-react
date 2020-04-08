import React from 'react';
import './Collection.scss';

function Collection(props) {

    const products = props.collection.map((product, index) => {
        if(index < 3){
            return (
                <div className="product" key={index}>
                    <div className="img">
                        <img src={product.image} alt={product.name} />

                        {index < 2
                            ? <div className="line"></div>
                            :null
                        }
                    </div>
    
                    <div className="title">
                        <h3>{product.name}</h3>
                        <span>${product.price}</span>
                    </div>
                </div>
            );
        }else{return null}
    });


    return(
        <div className="collection">
            <div className="name">
                <h2>{props.name}</h2>
                <span className="text-underline">See more</span>
            </div>
            <div className="products">
                {products}
            </div>
        </div>
    );
}

export default Collection;