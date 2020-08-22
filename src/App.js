import React from 'react';
import './App.css';
import { render } from '@testing-library/react';

class App extends React.Component { 
  
constructor(props) {
  super(props);
  this.state = {
    items: [],
    isLoaded: false
  }
  this.componentDidMount = this.componentDidMount.bind(this);
}

  componentDidMount() {
    fetch("http://api.open-notify.org/iss-now.json")
    .then(res => res.json())
    .then(json => {
      this.setState({
        items: json,
        isLoaded: true
      })
    })
    setTimeout(this.componentDidMount)
  }

  render() {
    const {isLoaded, items} = this.state;

    if (!isLoaded) {
        return <h1>Loading</h1>
    }
    
    else {

  return (
    <div style={{ 
    position: 'absolute',
    top : 200,
    left: '0%',
    right: '0%',
    height: 150,}}>
    <h1>
      The ISS is at {items.iss_position.longitude} longitude {items.iss_position.latitude} latitude
    </h1>
    <h1>
      Timestamp: {items.timestamp}
    </h1>
    </div>
    );
  }
}
}

export default App;