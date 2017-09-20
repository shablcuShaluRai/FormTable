import React, { Component } from 'react';
import TableData  from './TableData'



class App extends Component {
  state ={
    data : [

      {
        "name": "Anoop rai",
        "email": "anooprai@gmail.com",
        "age": 24
      },
    {
      "name": "shalu Rai",
      "email": "shaluraics22@gmail.com",
      "age": 22

    },
    {
      "name": "Sahil Rai",
      "email": "sahilraics@gmail.com",
       "age": 20
    }

  ]
  }







  render() {
    return (
      <div className="App">
      <p> TableData </p>

      <TableData  data = {this.state.data}/>
      </div>
    );
  }
}

export default App;
