import React, { Component } from 'react';
import TableData  from './TableData'
import serializeForm from 'form-serialize'


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

  handleSubmit =(e) =>  {
    e.preventDefault();
      const values = serializeForm(e.target, { hash: true })
  this.setState(newdata => ({
    data:newdata.data.concat([values])
  }))
}

  render() {
    return (
      <div className="App">
      <p> TableData </p>

      <form onSubmit={this.handleSubmit} >

      <div >
          <input type='text' name='name' placeholder='Name'/>
          <input type='text' name='email' placeholder='Email'/>
          <input type='number' name='age' placeholder='Age'/>
          <button>Add Data</button>
      </div>

      </form>

      <TableData  data = {this.state.data}/>
      
      </div>
    );
  }
}

export default App;
