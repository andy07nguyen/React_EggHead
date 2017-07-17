import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    // super gives us access to this
    this.state = {currentEvent: '----'}
    this.update = this.update.bind(this);
  }
  update(e){
    this.setState({currentEvent: e.type})
  }
  render(){
    return (
      <div>
        <textarea
          onKeyPress = {this.update}
          onCopy = {this.update}
          onCut = {this.update}
          onPaste = {this.update}
          onFocus = {this.update}
          onBlur = {this.update}
          onDoubleClick={this.update}
          onTouchStart = {this.update}
          onTouchMove = {this.update}
          onTouchEnd = {this.update}
          cols="30"
          rows="10" />
        <h2>{this.state.currentEvent}</h2>
      </div>
    )
  }
}

export default App;