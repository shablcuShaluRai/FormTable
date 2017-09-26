import React, { Component } from 'react';
 import Reactable from 'reactable';

 const Table = Reactable.Table,
       Thead = Reactable.Thead,
      Th = Reactable.Th,
      Tr = Reactable.Tr,
      Td = Reactable.Td;

export default class TableData extends Component{

  render(){
    const { data, OnDeleteData } = this.props;
    return(
      <Table>
      <Thead>
      <Th column="number">#</Th>
      <Th column="Name"> Name</Th>
      <Th column="Email">Email</Th>
      <Th column="Age">Age</Th>
      <Th column="Action">Action</Th>
      </Thead>

      {
          data.map((idvdata, indx) =>
              <Tr key={indx}>
                  <Td column="number">{indx + 1}</Td>
                  <Td column="Name">{idvdata.name}</Td>
                  <Td column="Email">{idvdata.email}</Td>
                  <Td column="Age">{idvdata.age}</Td>
                  <Td column= "Action">
                  <div>
                  <button onClick={() => OnDeleteData(idvdata)}>Delete</button>
                  </div>

                  </Td>
                  </Tr>


                )
                }
      </Table>

    )
  }
}
