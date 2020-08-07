import React, { Component } from 'react';
import '../App.css';
import PhonForm from './PhoneForm'

class App extends Component {
  state = {
    information : [
      {
        id: 1,
        name: 'z쿳쿳z',
        phone: '010-1234-5678'
      },
      {
        id: 2,
        name: '홍길동',
        phone: '010-9876-5432'
      }
    ]
  }

  render(){
    return (
      <div className="App">
        <PhonForm information={this.state.information}/>
      </div>
    )
  }
}

export default App;
