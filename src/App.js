import React, {Component} from 'react';
import Header from './components/UI-details/Header';
import Footer from './components/UI-details/Footer';
import Home from './components/pages/Home';
import Inspiration from './components/pages/Inspirations';
import Collections from './components/pages/Collections';
import DetailsProducts from './components/pages/DetailsProduct';
import LogIn from './components/UI-details/LogIn';

import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';

import IMAGES from './shared/gallery';
import PRODUCTS from './shared/products';




class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      images: IMAGES,
      products: PRODUCTS,

      signIn: false
    };
  }

  handlerSignIn = () => {
    this.setState((state) => {
      return {signIn: !state.signIn};
    });
  }


  render() {

    const HomePage = () => {
      const products = this.state.products.filter((product) => product.mainImage === true);

      return(
        <Home images = {this.state.images} products = {products} />
      )
    };

    const Product = ({match}) => {
      const product = this.state.products.find((product) => product.id === match.params.product);

      if(product !== undefined){
        return (
          <DetailsProducts product = {product} />
        )
      }else{
        return (
          <Redirect to="/collections" />
        )
      }

    };

    const AllCollections = () => {
      return (
        <Collections products = {this.state.products} />
      )
    };

    return (
      <>
        <Header signIn = {this.handlerSignIn} />

        {
          this.state.signIn
            ? <LogIn signIn = {this.handlerSignIn} />
            : null
        }

        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/inspiration' component={Inspiration} />
          <Route exact path='/collections' component={AllCollections} />
          <Route path='/collections/:product' component={Product} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
