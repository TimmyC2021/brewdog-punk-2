import React from 'react';
import styles from './DisplayBeers.module.scss';
import BeerCard from '../BeerCard';

const DisplayBeers = (props) => {
  const beers = props.beers

  return (
    <div>
      <ul className={styles.cards}>
        {beers.map((beer, index)=>{
          return  <BeerCard key={index} beer={beer}/>
        })}
      </ul>
    </div>
  )
}

export default DisplayBeers
