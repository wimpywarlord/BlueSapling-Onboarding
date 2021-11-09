import './App.css'

import WeekContainer from './WeekContainer'
import About from "./About"
import Home from "./Home"

import {BrowserRouter as Router, Route, } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Home} />
        <Route path="/about"  component={About} />
        <Route path="/report"  component={WeekContainer} />
      </div>
    </Router>
  )
}

export default App
