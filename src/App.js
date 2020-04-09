import React, {Component} from 'react';
import Header from './components/UI-details/Header';
import Footer from './components/UI-details/Footer';
import Home from './components/pages/Home';
import Inspiration from './components/pages/Inspirations';
import Collections from './components/pages/Collections';
import DetailsProducts from './components/pages/DetailsProduct';

import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';

import IMAGES from './shared/gallery';
import PRODUCTS from './shared/products';

import NEWARRIVALS from './shared/collections/newArrivals';
import DESKSANDTABLES from './shared/collections/desksAndTables';
import CHAIRS from './shared/collections/chairs';
import ORGANIZERS from './shared/collections/organizers';
import WALLSHELVES from './shared/collections/wallShelves';



class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      images: IMAGES,
      products: PRODUCTS,

      collections: [
        {
          nameCollection: 'newarrivals',
          collection: NEWARRIVALS
        },
        {
          nameCollection: 'desksandtables',
          collection: DESKSANDTABLES
        },
        {
          nameCollection: 'chairs',
          collection: CHAIRS
        },
        {
          nameCollection: 'organizers',
          collection: ORGANIZERS
        },
        {
          nameCollection: 'wallshelves',
          collection: WALLSHELVES
        }
      ]
    };
  }

  HomePage = () => {
    return(
      <Home images = {this.state.images} products = {this.state.products} />
    )
  }

  render() {

    const Product = ({match}) => {
      const collectionName = match.params.product.split('-')[0];
      const index = match.params.product.split('-')[2];

      const collection = this.state.collections.filter((collection) => collection.nameCollection === collectionName)[0].collection;
      const product = collection[index];

      return (
        <DetailsProducts
          product = {product}
        />
      )
    }

    return (
      <>
        <Header />
        <Switch>
          <Route path='/home' component={this.HomePage} />
          <Route exact path='/inspiration' component={Inspiration} />
          <Route exact path='/collections' component={Collections} />
          <Route path='/collections/:product' component={Product} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
