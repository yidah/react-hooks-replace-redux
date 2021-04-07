import React from 'react';

//REDUX
// import { useSelector } from 'react-redux';

import FavoriteItem from '../components/Favorites/FavoriteItem';
import './Products.css';

// CONTEXT
// import { ProductsContext } from '../context/products-context';
// import React, { useContext } from 'react';

//CUSTOM
import { useStore } from '../hooks-store/store';

const Favorites = props => {
  // REDUX
  // const favoriteProducts = useSelector(state =>
  //   state.shop.products.filter(p => p.isFavorite)
  // );

  // CONTEXT
  // const favoriteProducts = useContext(ProductsContext).products.filter(p => p.isFavorite);

  // CUSTOM
  const state = useStore()[0];
  const favoriteProducts = state.products.filter(p => p.isFavorite);
  

  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map(prod => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
