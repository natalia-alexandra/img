import React from 'react';
import logo from './logo.svg';
import './style/App.scss';
import UploadImg from './components/UploadImg';
import GetImages from './components/GetImages';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <UploadImg />

      <GetImages />
    </div>
  );
}

export default App;
