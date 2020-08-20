import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import MainComponent from './components/MainComponent';
// import {ConfigureStore} from './components/redux/configureStore';
function App() {

  // const store=ConfigureStore();

  return (

    <div className="App">
      
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
