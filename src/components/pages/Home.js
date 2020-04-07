import React from 'react';
import './HomeStyles/Home.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch, faBookmark, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

function RenderCollection(props) {
    if(props.index === 0){
        return (
            <Link to="/collections" className="allCollections rounded img-center">
                <img src="/images/inspiration/7.jpg" alt="all collections"></img>
                <span>GET ALL COLLECTIONS</span>
                <span>SHOP NOW</span>
            </Link>
        )
    }else if(props.index === 2){
        return (
            <div className="someLinks">
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
            </div>
        )
    }else{
        return null
    }
}

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

    const products = props.products.map((product, index) => {
        return(
            <>
                <div key = {index} className={`product product-${index}`}>
                    <div className="border rounded"></div>

                    <div className="header">
                        <h3>{product.name}</h3>
                        <div>
                            <span>Collection</span>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                    </div>

                    <div className="img">
                        <img src={product.image} alt="product" />
                    </div>
                </div>
            
                <RenderCollection index = {index} />
            </>
        )
    })

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