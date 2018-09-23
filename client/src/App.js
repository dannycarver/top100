import React, { Component } from 'react';
import Top100Form from './components/Top100Form';
import Top100List from './components/Top100List';

class App extends Component {
  state = { top100s: [] } 

  componentDidMount() {
    //TOP100 make a call to our rails server to get Items
  }

  addSong = (name) => {
    const { top100s } = this.state;
    const id = Math.floor(( 1 + Math.random()) * 0x1000).toString() 
    this.setState({ top100s: [...top100s, { id, name }] });
  }

  updateTop100 = (id) => {
    let top100s = this.state.top100s.map( t=> {
      if (t.id === id)
        return { ...t, complete: !t.complete }
      return t;
    });
    this.setState({ top100s });

  }

  deleteTop100 = (id) => {
    const { top100s } = this.state;
    this.setState({ top100s: top100s.filter( t => id !== id) })
  }






  render() {
    return (
      <div className="container">
      <Top100Form addSong={this.addSong} />
      <Top100List
        top100s={this.state.top100s}
        upadateTop100={this.updateTop100}
        deleteTop100={this.deleteTodo}
        />
      </div>
    );
  }
      
}


export default App;
