import React from "react";
import CollectionPreview from '../../components/PreviewCollection/PreviewCollection';
import SHOP_DATA from './SHOP_DATA'

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            collections: SHOP_DATA
        }
    
    } 

    render() {
        const {collections} = this.state;

        return ( 
        
        <div className="shop-page">

        {collections.map(({id, ...etc}) => (
        <CollectionPreview key={id} {...etc} />   ))}

        </div> 

        )
    }
}

export default ShopPage;