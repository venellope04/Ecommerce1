import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import { ShopContext } from '../Context/ShopContext';

const Product = () => {
const{all_product}=useContext(ShopContext);
const{productId}=useParams();
const product=all_product.find((e)=>e.id === Number (productId))
 return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay produc t={product}/>
    </div>
)
}

export default Product