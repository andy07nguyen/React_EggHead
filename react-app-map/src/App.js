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

  filter(e){
    this.setState({filter: e.target.value})
  }

  render(){
    let items = this.state.items
    if (this.state.filter){
      items = items.filter( item =>
        item.name.toLowerCase()
          .includes(this.state.filter.toLowerCase())
      )
    }
    return (
      <div>
        <input type="text" onChange={this.filter.bind(this)} />
        <div>
          {items.map(item => <h4 key={item.name}>{item.name}</h4>)}
        </div>
        <div>
          {items.map(item =>
            <Person key={item.name} person={item} />
          )}
        </div>
      </div>
    )
  }
}

const Person = (props) => <h4>{props.person.name}</h4>
export default App;