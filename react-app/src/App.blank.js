import React from 'react';
import './App.css';

class App extends React.Component {
  btnClick = () => {alert("Hello")};

  render(){
    return (
      <div className="container mt-3">
        <button 
          className="btn btn-primary"
          onClick={this.btnClick}
        >
          OK
        </button>
      </div>
    );
  }
}

export default App;
