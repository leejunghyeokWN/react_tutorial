import React, {Component} from 'react';
import Ninjas from "./Ninjas";
import AddNinja from './addNinja';

class App extends Component {
  state = {
    ninjas : [
      {name: 'Lee', age: 30, belt: 'black', id:1 },
      {name: 'Park', age: 16, belt: 'yellow', id:2 },
      {name: 'Lim', age: 12, belt: 'green', id:3 }
    ]
  }
  addNinja = (ninja)=>{
    ninja.id=Math.floor(Math.random()*10000);
    console.log(ninja);
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    });
  }
  deleteNinja = (id)=>{
    let ninjas = this.state.ninjas.filter(ninja =>{
      return ninja.id != id;
    });
    this.setState({
      ninjas: ninjas
    });
  }
  componentDidMount(){
    console.log("Component Mounted.");
  }
  componentDidUpdate(prevProps, prevStates){
    console.log("Component Updated.");
    console.log(prevProps, prevStates);
  }
  render(){
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome :)</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;