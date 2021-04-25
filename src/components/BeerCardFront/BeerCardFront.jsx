import React, { useState } from 'react';
import styles from './BeerCardFront.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faListOl } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'


const BeerCardFront = (props) => {

  const {name, isFavourite}=props.beer;
  const [sample, setSample] = useState(false);
  const isFavIcon = <FontAwesomeIcon icon={faHeart} />;
  const isNotFavIcon = <FontAwesomeIcon icon={farHeart} />;
  const listIcon = <FontAwesomeIcon icon={faListOl} />

  const sampleClickHandler = (event) => {
    // event.stopImmediatePropogation();
    console.log('sample click');
    console.log(!sample);
    setSample(!sample);
  }

  return (
    <div>
      {isFavIcon}
      {isNotFavIcon}
      {/* {beerIcon} */}
      <span onClickCapture={sampleClickHandler} className={`zindex ${sample ? 'styles.listIcon' :'2'}`}>{listIcon}</span>
      <h1>Front</h1>
      <p>name {name}</p>
      <p>favourite {isFavourite}</p>
    </div>
  )
}

export default BeerCardFront
