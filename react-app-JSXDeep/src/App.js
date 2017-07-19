import React from 'react';

const App = (props) => {
  var myStyle = {
    backgroundColor: '#000',
    height: 10
  }
  return React.createElement(
    <div style={myStyle}>
      <a href="#"
        notrendered="x"
        onClick={update}>
        {/* this is a comment */}
        this is the text?
      </a>
      {i>1 ? 'More than one': 'one'}
      {i>1 && 'More than one'}
    </div>
  )
}
export default App;