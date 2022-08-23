import React from 'react';
import './App.css';
import ToDo from './Components/ToDo';

function App() {
  return (
    <div className="container border border-primary rounded mt-5" style={{backgroundcolor:'#D5DBDB'}}>
      <ToDo></ToDo>
    </div>
  );
}

export default App;
