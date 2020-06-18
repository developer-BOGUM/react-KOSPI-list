import React from 'react';
import axios from 'axios';
import './App.css';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


class App extends React.Component {

  state = {
    customers:""
  }
  componentDidMount() {
    this.callapi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err));
  }


  callapi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }
  render() {
    return(
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {this.state.customers ? this.state.customers.map(c => {
              return (
                    <Customer
                      key={c.id}
                      id={c.id}
                      image={c.image}
                      name={c.name}
                      birthday={c.birthday}
                      gender={c.gender}
                      jab={c.jab}
                    />
              );
              }) : ""}
          </TableBody>
        </Table>
    );
  }
}

export default App;
