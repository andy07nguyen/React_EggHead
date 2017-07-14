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

    // this is dom representation of our component
    // return React.createElement('h1', null, "i do not want to leave")
    // 'h1' is an element
    // null is props
    // all custom element needs to start with a capital letter
    // 3rd element can be another element or string that represents element texts


// const App = () => <h1>Hi</h1>
// this is a stateless function component

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "this is the default txt"
}
export default App;