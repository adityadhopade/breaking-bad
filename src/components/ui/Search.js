import React from 'react'
import { useState } from 'react'

const Search = ({getQuery}) => { // pass the props here to get the query 
  const [text, setText] = useState('')
  const onChange = (nameSearch) => {
    setText(nameSearch)
    getQuery(nameSearch) // dosent exist for now we have to add it as the PROPS in the APP.js for search
  }
  return (
    <section className='search'>
        <form>            
            {/* <input type="text" className='form-control' placeholder='Search charecters here' class="form-control" value={text} onChange={(e) => setText(e.target.value)} autoFocus />   */}
            <input type="text" className='form-control' placeholder='Search charecters here' class="form-control" value={text} onChange={(e) => onChange(e.target.value)} autoFocus />               
        </form>
    </section>
  )
}

// onChange={(e) => setText(e.target.value)} It hits out the text whatever we type the text in them and runs it properly in this
// but it will still not work until we add the trigger using some kind of query 
export default Search


// now instead of settext we are goingg to set the text onchange