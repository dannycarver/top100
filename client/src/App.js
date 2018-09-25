import React, { Component } from 'react';
import Top100Form from './components/Top100Form';
import Top100List from './components/Top100List';

class App extends Component {
  state = { top100s: [] } 

  componentDidMount() {
    //TOP100 make a call to our rails server to get Items
    fetch('/api/songs')
    .then( res => res.json() )
    .then( top100s => {
      this.setState({ top100s }) 
    })
  }

  addSong = (name) => {
    let song = { name };
    fetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(song)
    }).then( res => res.json() )
      .then( top100 => {
      const { top100s } = this.state;
       
      this.setState({ top100s: [...top100s] });
  })
}

  updateTop100 = (id) => {
    fetch(`/api/items/${id}`, { method: 'PUT' })
      .then( res => res.json() )
      .then( song => {
        let top100s = this.state.top100s.map( t=> {
            if (t.id === id)
              return song
            return t;
          });
          this.setState({ top100s });
        })
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
