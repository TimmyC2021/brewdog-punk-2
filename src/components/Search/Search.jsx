import React, { useState } from 'react';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus, faSearchMinus } from '@fortawesome/free-solid-svg-icons';

const faSearchPlusElement = <FontAwesomeIcon icon={faSearchPlus} />;
const faSearchMinusElement = <FontAwesomeIcon icon={faSearchMinus} />;

const Search = (props) => {

  const { searchOpen, setSearchOpen } = props;
  
  const searchHandler = () => {
    setSearchOpen(!searchOpen);
    console.log(`searchOpen is ${searchOpen}`)
  }
   
  return (
    <span>
      <button onClick={searchHandler}>
        {searchOpen ? faSearchMinusElement :  faSearchPlusElement }
        {/* {faSearchElement} */}
      </button>
      <div className={styles.Search}>
        Search Component
      </div>
    </span>)
}
export default Search;