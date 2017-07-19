import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {items: []}
  }

  componentWillMount(){
    fetch('http://swapi.co/api/people/?format=json')
    .then(response => response.json())
    // will get result out of that Api. we will call that items
    .then(  ({results: items})=> this.setState({items}))
    // setstate our items to that values
  }
  render(){
    let items = this.state.items
    return (
      <div>
        {items.map(item => <h4>{item.name}</h4>)}
      </div>
    )
  }
}

export default App;