import React from 'react';
import './Collections.scss'
import Collection from '../UI-details/Collection';

import NEWARRIVALS from '../../shared/collections/newArrivals';
import DESKSANDTABLES from '../../shared/collections/desksAndTables';
import CHAIRS from '../../shared/collections/chairs';
import ORGANIZERS from '../../shared/collections/organizers';
import WALLSHELVES from '../../shared/collections/wallShelves';

function Collections(props) {
    return(
        <div className="container collections">
            <Collection collection = {NEWARRIVALS}/>
            <div className="hr-line"></div>
            <Collection collection = {DESKSANDTABLES}/>
            <div className="hr-line"></div>
            <Collection collection = {CHAIRS}/>
            <div className="hr-line"></div>
            <Collection collection = {ORGANIZERS}/>
            <div className="hr-line"></div>
            <Collection collection = {WALLSHELVES}/>            
        </div>
    );
}

export default Collections;