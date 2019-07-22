import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Navigation />
    <Route path="/" exact component={Home} />
    <Route path="/about/" component={About} />
    <Route path="/contact/" component={Contact} />
  </div>
);

export default App;
