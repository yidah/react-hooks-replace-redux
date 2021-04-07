import React, { useContext } from 'react';
// REDUX
// import { useDispatch } from 'react-redux';

import Card from '../UI/Card';
import './ProductItem.css';

// REDUX
// import { toggleFav } from '../../store/actions/products';

// CONTEXT
import { ProductsContext } from '../../context/products-context';

const ProductItem = props => {
  
  // REDUX
  // const dispatch = useDispatch();

  //CONTEXT
  // get the pointer to the toggle function in our context
  const toggleFav = useContext(ProductsContext).toggleFav;

  const toggleFavHandler = () => {
    //REDUX
    // dispatch(toggleFav(props.id));

    // CONTEXT
    toggleFav(props.id);
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
