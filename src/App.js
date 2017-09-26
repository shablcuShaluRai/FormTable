import React, { Component } from 'react';
import TableData  from './TableData'
import serializeForm from 'form-serialize'


class App extends Component {
  state ={
    data : [

      {
        "id":1,
        "name": "Anoop rai",
        "email": "anooprai@gmail.com",
        "age": 24
      },
    {
      "id":2,
      "name": "shalu Rai",
      "email": "shaluraics22@gmail.com",
      "age": 22

    },
    {
      "id": 3,
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

removeData = (data) => {this.setState((state) => ({

   data:state.data.filter((d) => d.id !== data.id )

  }))
}




  render() {
    return (
      <div className="App">
      <p> TableData </p>

      <form onSubmit={this.handleSubmit} >

      <div className='divForLabelInput'>

          <input type='text' name='name' placeholder='Name' id='detail'/>
          <input type='text' name='email' placeholder='Email' id='detail'/>
          <input type='number' name='age' placeholder='Age' id='detail'/>
          <button>Add Data</button>
          </div>

      </form>


      <TableData
      data = {this.state.data}
      OnDeleteData = { this.removeData }
      />

      </div>
    );
  }
}

export default App;
