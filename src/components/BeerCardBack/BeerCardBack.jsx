import React from 'react';
import styles from './BeerCardBack.module.scss';

const BeerCardBack = (props) => {

  const {name, ph, colour, isFavourite}=props.beer;

  return (
    <div className={styles.cardBack}>
      <h1>Back</h1>
      <p>name {name}</p>
      <p>ph: {ph}</p>
      <p>colour {colour}</p>
      <p>favourite {isFavourite}</p>

    </div>
  )
}

export default BeerCardBack
