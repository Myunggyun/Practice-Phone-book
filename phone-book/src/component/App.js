import React, { Component } from 'react';
import '../App.css';
import PhonForm from './PhoneForm'

class App extends Component {
  id = 3;
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

  handleCreate = (data) => {
    const {information} = this.state
    this.setState({
      information: information.concat({id:this.id++, ...data})
    })
  }

  handleRemove = (id) => {
    const {information} = this.state
    this.setState({
      information: information.filter((list) => list.id !== id)
    })
  }

  handleUpdate = (id, data)=>{
    const {information} = this.state
    this.setState({
      information: information.map(list => list.id === id ? {...list, ...data} : list)
    })
  }

  render(){
    return (
      <div className="App">
        <PhonForm 
        information={this.state.information}
        onCreate={this.handleCreate.bind(this)}
        onRemove={this.handleRemove.bind(this)}
        onUpdate={this.handleUpdate.bind(this)}    
        />
      </div>
    )
  }
}

export default App;
