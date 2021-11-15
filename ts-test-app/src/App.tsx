import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

interface IState {
  people: {
    name : string,
    url: string,
    age: number,
    note: string,
  }[]
}

function App() {
  // TYPE SCRIPT FIGURES\INFERs OUT A LOT IN OWN ITS OWN
  // YOU CAN EVEN EXPLICITLY DEFINE USING <>
  // const [people, setPeople] = useState([);


  const [people, setPeople] = useState < IState["people"]>([
    {name : 'KSHIITJ DHYANI', url : "", age : 22, note: "HEYA BABY BOI COOL BABY MAMA"},
  ])
  people.map((person) => {
    console.log(person.age);
  })

  return (
    <div className="App">
      KSHIITJ IS AWSOME 
    </div>
  );
}

export default App;
