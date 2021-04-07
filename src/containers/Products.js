// CONTEXT
import React, { useContext } from 'react';

// REDUX
// import { useSelector } from 'react-redux';

import ProductItem from '../components/Products/ProductItem';
// CONTEXT
import { ProductsContext } from '../context/products-context';

import './Products.css';

const Products = props => {
  // Getting access to the CONTEXT
  const productList = useContext(ProductsContext).products;

  // REDUX
  // const productList = useSelector(state => state.shop.products);
  return (
    <ul className="products-list">
      {productList.map(prod => (
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
