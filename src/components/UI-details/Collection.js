import React, {Component} from 'react';
import './Collection.scss';
import {Link} from 'react-router-dom';


class Collection extends Component {

    constructor(props){
        super(props);

        this.state = {
            showAll: false,
            handlerName: 'See more',

            collection: []
        }
    }

    handlerNuberProducts = () => {

        let handlerName = 'See more';
        let collection = this.props.collection.slice(0, 3);

        if(this.state.showAll){
            handlerName = 'See less';
            collection = this.props.collection;
        }

        this.setState(state => {
            return {
                handlerName,
                collection,
                showAll: !state.showAll
            }
        });
    }

    componentDidMount() {
        this.handlerNuberProducts();
    }

    render() {

        const products = this.state.collection.map((product, index) => {
            return (
                <Link to={`collections/${product.id}`} className="product" key={index}>
                    <div className="img">
                        <img src={product.image} alt={product.name} />
                    </div>
        
                    <div className="title">
                        <h3>{product.name}</h3>
                        <span>${product.price}</span>
                    </div>
                </Link>
            );
        });

        return(
            <div className="collection">
                <div className="name">
                    <h3>{
                        this.props.name
                            ? this.props.name
                            : this.props.collection[0].collection
                        }</h3>
                    <span className="text-underline" onClick={this.handlerNuberProducts}>{this.state.handlerName}</span>
                </div>
    
                <div className="products">
                    {products}
                </div>
            </div>
        );
    }
}

export default Collection;