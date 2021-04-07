import React from 'react';

// REDUX
// import { useSelector } from 'react-redux';

// CONTEXT
// import { ProductsContext } from '../context/products-context';
// import React, { useContext } from 'react';

// CUSTOM
import { useStore } from '../hooks-store/store';

import ProductItem from '../components/Products/ProductItem';
import './Products.css';

const Products = props => {
   // REDUX
  // const productList = useSelector(state => state.shop.products);

  // Getting access to the CONTEXT
  // const productList = useContext(ProductsContext).products;

  // CUSTOM
  const state = useStore()[0];
  
  return (
    // <ul className="products-list">
    //   {productList.map(prod => (
    //     <ProductItem
    //       key={prod.id}
    //       id={prod.id}
    //       title={prod.title}
    //       description={prod.description}
    //       isFav={prod.isFavorite}
    //     />
    //   ))}
    // </ul>

    //CUSTOM
    <ul className="products-list">
      {state.products.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
    
  );
};

export default Products;
