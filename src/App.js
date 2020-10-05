import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import requests from './requests';
import Resutls from './Resutls';

function App() {
  const [selectedOption,setSelectedOption] = useState(requests.fetchActionMovies);
  return (
    <div className="app">
      {/* Header  */}
      <Header/>
      {/* nav */}
      <Nav setSelectedOption={setSelectedOption}/>
      {/* Results */}
      <Resutls selectedOption={selectedOption}/>
    </div>
  );
}
export default App;
