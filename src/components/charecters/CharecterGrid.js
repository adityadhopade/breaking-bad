// The card Componenent for the Grid

import React from 'react'
import CharecterItem from './CharecterItem'
import Spinner from '../ui/Spinner'

// destructuring syntax ({ items, isLoading })
const CharecterGrid = ({ items, isLoading }) => { // we need to fetch the props here like props.items and props.isLoading or we can use the destructuring here 
  return isLoading ? 
  <Spinner /> : 
  <div className='cards'>
    {items.map((item) => (
        <CharecterItem item={item} key={item.char_id}></CharecterItem>
    ))} 
  </div>
}


// items.map() is high order array method it allows us to loop through and here basically allow us to the display tghe content within the cards section
// for iteration via all the json objects we have to iterate it so we are going to use it
export default CharecterGrid