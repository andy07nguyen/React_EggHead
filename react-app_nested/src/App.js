import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    // super gives us access to this
    this.state = {
      txt: 'this is the state txt',
      cat: 0
    }
  }

  update(e){
    this.setState({txt: e.target.value})
  }
  render(){
    return (
      <div>
        <input type="text" onChange={this.update.bind(this)}/>
        <h2>{this.state.txt} - {this.state.cat}</h2>
      </div>
    )
  }
}

export default App;