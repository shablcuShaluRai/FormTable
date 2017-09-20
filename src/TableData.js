import React, { Component } from 'react';
 import Reactable from 'reactable';

 const Table = Reactable.Table,
       Thead = Reactable.Thead,
      Th = Reactable.Th,
      Tr = Reactable.Tr,
      Td = Reactable.Td;

export default class TableData extends Component{

  render(){
    return(
      <Table>
      <Thead>
      <Th column="number">#</Th>
      <Th column="Name"> Name</Th>
      <Th column="Email">Email</Th>
      <Th column="Age">Age</Th>
      </Thead>

      {
          this.props.data.map((idvdata, indx) =>
              <Tr key={indx}>
                  <Td column="number">{indx + 1}</Td>
                  <Td column="Name">{idvdata.name}</Td>
                  <Td column="Email">{idvdata.email}</Td>
                  <Td column="Age">{idvdata.age}</Td>

                  </Tr>
                )
                }
      </Table>

    )
  }
}
