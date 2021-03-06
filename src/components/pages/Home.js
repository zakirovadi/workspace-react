import React from 'react';
import './HomeStyles/Home.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch, faBookmark, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';


function Home(props) {

    const editorsGallery = props.images.map((image) => {
        if(image.choice) {
            return (
                <div key={image.id}>
                    <img className="rounded" src={image.path} alt="inspiration"/>
                </div>
            )
        }else{
            return null
        }
    });

    const sortedProducts = [];

    sortedProducts.push(props.products.find((product) => product.collection === 'Desks & Tables'));
    sortedProducts.push(props.products.find((product) => product.collection === 'Organizers'));
    sortedProducts.push(props.products.find((product) => product.collection === 'Chairs'));
    sortedProducts.push(props.products.find((product) => product.collection === 'Wall Shelves'));

    const products = sortedProducts.map((product, index) => {
        return(
            <Link to='/collections' key={index} className={`product product-${index}`}>
                <div className="border rounded"></div>

                <div className="header">
                    <h3>{product.collection}</h3>
                    <div>
                        <span>Collection</span>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </div>

                <div className="img">
                    <img src={product.image} alt={product.name} />
                </div>
            </Link>
        )
    });

    const allCollections =
        <Link key={100} to="/collections" className="allCollections rounded img-center">
            <img src="/images/inspiration/7.jpg" alt="all collections"></img>
            <span>GET ALL COLLECTIONS</span>
            <span>SHOP NOW</span>
        </Link>;

    const someLinks = 
        <div key={101} className="someLinks">
            <div>
                <div className="rounded img-center">
                    <img src="/images/inspiration/11.jpg" alt="all collections"/>
                </div>
                <div>
                    <span className="text-underline">Catalog</span>
                </div>
            </div>

            <div>
                <div className="rounded img-center">
                    <img src="/images/inspiration/3.jpg" alt="all collections" />
                </div>
                <div>
                    <span className="text-underline">Planning tools</span>
                </div>
            </div>
        </div>;

    products.splice(1, 0, allCollections);
    products.splice(4, 0, someLinks);

    return(
        <div className="main-page">

            <div className="container header main-header">
                <h1>Need <span className="text-underline">inspiration</span> for your workplace?</h1>
                <div className="main-search">
                    <input type="text" placeholder="Type product that you are looking for" />
                    <FontAwesomeIcon icon={faSearch} className="icon" />
                </div>
            </div>

            <div className="container inspiration">
                <div className="inpiration-link">
                    <FontAwesomeIcon icon={faBookmark} />
                    <span className="text-underline">Editor's Choices</span>
                </div>

                <div className="editors-gallery">{editorsGallery}</div>

                <div className="inpiration-link">
                    <span>Explore</span>
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>

            <div className="container products">

                <div className="header">
                    <h2>Inspiration Products</h2>
                    <span>Get your inspiration stuff here with best value</span>
                </div>

                <div className="products-wrap">{products}</div>

            </div>

        </div>
    );
}

export default Home;