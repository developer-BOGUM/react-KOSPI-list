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
    "name": "김철수",
    "birthday": "941112",
    "gender": "남자",
    "jab": "대학생"
  },
  {
    "id": 3,
    "image":"https://placeimg.com/64/64/3",
    "name": "이영희",
    "birthday": "900402",
    "gender": "여자",
    "jab": "회사원"
  }
]

class App extends React.Component {
  render() {
    return(
      <div>
        {
          customers.map(c =>  {
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
          })
        }
      </div>
    );
  }
}

export default App;
