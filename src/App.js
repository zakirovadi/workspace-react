import React, {Component} from 'react';
import Header from './components/UI-details/Header';
import Footer from './components/UI-details/Footer';
import Home from './components/pages/Home';
import Inspiration from './components/pages/Inspirations';
import Collections from './components/pages/Collections';

import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';

import IMAGES from './shared/gallery';
import PRODUCTS from './shared/products';



class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      images: IMAGES,
      products: PRODUCTS
    };
  }

  HomePage = () => {
    return(
      <Home images = {this.state.images} products = {this.state.products} />
    )
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path='/home' component={this.HomePage} />
          <Route exact path='/inspiration' component={Inspiration} />
          <Route exact path='/collections' component={Collections} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
