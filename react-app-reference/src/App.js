import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    // super gives us access to this
    this.state = {a: ''}
  }

  update(){
    this.setState({
      a: this.a.value, 
      b: this.refs.b.value,
      c: ReactDOM.findDOMNode(this.c).value,
      // this.c is the component
      d: this.d.refs.input.value
    })
  }
  render(){
    return (
      <div>
        <input ref={ node => this.a = node}
        type="text" onChange={this.update.bind(this)}/>
        {this.state.a}
        <hr />
        <input 
        ref="b" 
        type="text" 
        onChange={this.update.bind(this)}/>
        {this.state.b}
        <hr />
        <Input
         ref={ component => this.c = component}
        update={this.update.bind(this)}/>
        {this.state.c}
        <hr />
        <InputDiv
         ref={ component => this.d = component}
        update={this.update.bind(this)}/>
        {this.state.d}
      </div>
    )
  }
}

class Input extends React.Component {
  render(){
    return (
        <input type="text" onChange={this.props.update}/>
    )
  }
}

class InputDiv extends React.Component {
  render(){
    return (
      <div>
        <input ref="input" type="text" onChange={this.props.update}/>
      </div>
    )
  }
}

export default App;