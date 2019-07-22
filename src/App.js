import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Navigation />
    <Route path="/" exact component={index} />
    <Route path="/about/" component={about} />
    <Route path="/contact/" component={index} />
  </div>
);

export default App;
