import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ListItem from './components/ListItem' 

function App() {
  const [list, nn] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/vs/pokemon').then((res) => {
      setList(res.data.results)
    })
  }, [])

  return (
    <div className="App">
      {list.map((element,index) => {
        return <ListItem name={element.name} key={index}/>
      })}
    </div>
  );
}

export default App;
