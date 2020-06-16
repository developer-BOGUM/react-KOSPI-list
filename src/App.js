import React from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    "id": 1,
    "image":"https://placeimg.com/64/64/1",
    "name": "홍길동",
    "birthday": "961222",
    "gender": "남자",
    "jab": "대학생"
  },
  {
    "id": 2,
    "image":"https://placeimg.com/64/64/2",
    "name": "홍길동",
    "birthday": "961222",
    "gender": "남자",
    "jab": "대학생"
  },
  {
    "id": 3,
    "image":"https://placeimg.com/64/64/3",
    "name": "홍길동",
    "birthday": "961222",
    "gender": "남자",
    "jab": "대학생"
  }
]

class App extends React.Component {
  render() {
    return(
      <div>
        <Customer
          id={customers[0].id}
          image={customers[0].image}
          name={customers[0].name}
          birthday={customers[0].birthday}
          gender={customers[0].gender}
          jab={customers[0].jab}
        />
        <Customer
          id={customers[1].id}
          image={customers[1].image}
          name={customers[1].name}
          birthday={customers[1].birthday}
          gender={customers[1].gender}
          jab={customers[1].jab}
        />
        <Customer
          id={customers[2].id}
          image={customers[2].image}
          name={customers[2].name}
          birthday={customers[2].birthday}
          gender={customers[2].gender}
          jab={customers[2].jab}
        />
      </div>
    );
  }
}

export default App;
