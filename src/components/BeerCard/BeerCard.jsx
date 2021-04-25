import React, { useState } from 'react';
import styles from './BeerCard.module.scss';
import BeerCardFront from '../BeerCardFront';
import BeerCardBack from '../BeerCardBack';

const BeerCard = (props) => {

const [cardFront, setCardFront] = useState(true);

const beer = props.beer;

const cardClickHandler = () => {setCardFront(!cardFront)}

  return (
    <div onClick={cardClickHandler} className={styles.beercard}>
      <li>
        {cardFront ? <BeerCardFront beer={beer}/> : <BeerCardBack beer={beer}/>}
      </li>
    </div>
  )
}

export default BeerCard
