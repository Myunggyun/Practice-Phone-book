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
    ],
    keyword:''
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

  handelSearch = (searchData)=>{
    this.setState({
      keyword: searchData
    })
  }

  render(){
    const {information, keyword} = this.state
    const filterdlist = information.filter(list=>
      list.name.indexOf(keyword) !== -1
    )
    return (
      <div className="App">
        <PhonForm 
        information={filterdlist}
        onCreate={this.handleCreate.bind(this)}
        onRemove={this.handleRemove.bind(this)}
        onUpdate={this.handleUpdate.bind(this)}
        onSearch={this.handelSearch.bind(this)}
        />
      </div>
    )
  }
}

export default App;
