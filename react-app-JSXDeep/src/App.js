import React from 'react';

class App extends React.Component {
  render(){
    return (
      <Parent>
        <div className="childA"></div>
        {/* <div className="childB"></div> */}
      </Parent>
    )
  }
}

class Parent extends React.Component {
  render(){
    // console.log(this.props.children)
    // let items = this.props.children.map(child => child)
    
    // let items = React.Children
    //   .map(this.props.children, child => child)
    
    // let items = React.Children.toArray(this.props.children)
    // console.log(items)
    
    let items = React.Children
      .forEach(this.props.children, child => console.log(child.props.className))

    let itemsTwo = React.Children.only(this.props.children)
    // will give an error if there are multiple errors
    console.log(itemsTwo)
    return null
  }
}
export default App;