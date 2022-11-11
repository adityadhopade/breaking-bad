import './App.css';
import Header from './components/ui/Header';
import CharecterGrid from './components/charecters/CharecterGrid';

import {useState, useEffect} from 'react'
import axios, { Axios } from 'axios'; // we are using the axios to fetch the details ;axios here returns a promise 
import Search from './components/ui/Search';


//Hooks:  using the usestate and useeffect

// useState --> To use the state with the functional copmponents
// useEffect --> Fireoff when the component loads to make HTTP request to get the data

const App = () => {
  // 1st part defines the piece of state and 2nd part is a function which we will use to change the state
  const [items, setItems] = useState([]) // initially the array would be empty but with the time pasing we will fill the array
  const [isLoading, setIsLoading] = useState(true) // by default we kept it as true but after we laod the data we will make it false
  const [query, setQuery] = useState('')

  // as axios returns the promise we need to add a callback function (async and await)
  useEffect(() => {
    const fetchItems = async () => { // by default in the api calls we have get option
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`) //r esult we would get our result from the breaking bad api  
      // console.log(result.data);  
      setItems(result.data) // pass the whole json data object to the setItems 
      setIsLoading(false) // as our data is loaded now so we make it as false here 
    }
    fetchItems();
  }, [query])

  //in the charecter we are passing the isLoading, items as the props  

  // In React the props are passed via HTML to the specific Component
  return (
    <div className="container">      
      <Header />
      <Search getQuery={(q) => setQuery(q)}/>
      <CharecterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;


//Now basically we want our search to work so what can we do here then ?

// So basically we need to add here a query into what we are fetching here
// query represent whatever we type in the search box here 

// for that we need to get whatever is typed into the search box into our useEffect in our App.js it can be done with the help of PROPS


//getQuery is passed as props to the Search.js here
// we need to add the arrow function so that we can set the name(query) and pass it on to setQuery
// getQuery = {(q) => setQuery(q)} // here basically what we are doing is we are passing up the query from our search into usr app.js 

// so now what we needed to do is we basically need to have to call the namechange when this name actually changes
// for that we have the dependency in the useEffect of App.js where we can directly provide us the query as dependcency

// so whenever the query is changed the useEffect will be firing off then
// [] when it was empty it will fire at the beginning i.e. at the page load 
