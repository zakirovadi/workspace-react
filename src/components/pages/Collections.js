import React from 'react';
import './Collections.scss'
import Collection from '../UI-details/Collection';

import NEWARRIVALS from '../../shared/collections/newarrivals';
import DESKSANDTABLES from '../../shared/collections/desksandtables';
import CHAIRS from '../../shared/collections/chairs';
import ORGANIZERS from '../../shared/collections/organizers';
import WALLSHELVES from '../../shared/collections/wallshelves';

function Collections(props) {
    return(
        <div className="container collections">
            <Collection name="New Arrivals" collection = {NEWARRIVALS}/>
            <div className="hr-line"></div>
            <Collection name="Desk & Tables" collection = {DESKSANDTABLES}/>
            <div className="hr-line"></div>
            <Collection name="Chairs" collection = {CHAIRS}/>
            <div className="hr-line"></div>
            <Collection name="Organizers" collection = {ORGANIZERS}/>
            <div className="hr-line"></div>
            <Collection name="Wall Shelves" collection = {WALLSHELVES}/>            
        </div>
    );
}

export default Collections;