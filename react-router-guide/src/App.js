import * as React from "react";
import { BrowserRouter as Router, Routes, Route , Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          </nav>
            <Routes>
            {/* <Route path="/" render={() => <h1>Welcome!</h1>} /> */}
              <Route path="/" exact element={<Home />} />
              <Route path="/about"  element={<About />} />
              <Route path="/contact"  element={<Contact />} />
            </Routes>
      </main>
     </Router>
  );
}
// Home Page
function Home () {
  return <React.Fragment> <h1>Home</h1> <FakeText /> </React.Fragment>
  
};
// About Page
function About () {
  return <React.Fragment> <h1>About</h1> <FakeText /> </React.Fragment>
  
};
// Contact Page
function Contact () {
  return <React.Fragment> <h1>Contact</h1> <FakeText /> </React.Fragment>
  
};

const FakeText = () => (
  <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  )