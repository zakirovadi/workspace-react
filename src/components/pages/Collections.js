import React from 'react';
import './Collections.scss'
import Collection from '../UI-details/Collection';


function Collections(props) {

    const newArrivals = props.products.filter((product) => product.newArrivals === true);
    const deskAndTables = props.products.filter((product) => product.collection === 'Desks & Tables');
    const chairs = props.products.filter((product) => product.collection === 'Chairs');
    const organizers = props.products.filter((product) => product.collection === 'Organizers');
    const wallShelves = props.products.filter((product) => product.collection === 'Wall Shelves');

    return(
        <div className="container collections">
            <Collection name="New Arrivals" collection = {newArrivals}/>
            <div className="hr-line"></div>
            <Collection collection = {deskAndTables}/>
            <div className="hr-line"></div>
            <Collection collection = {chairs}/>
            <div className="hr-line"></div>
            <Collection collection = {organizers}/>
            <div className="hr-line"></div>
            <Collection collection = {wallShelves}/>            
        </div>
    );
}

export default Collections;