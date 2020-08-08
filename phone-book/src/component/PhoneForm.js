import React, { Component } from 'react';
import Phonelist from './Phonelist'

class PhoneForm extends Component {
  state= {
    name: '',
    phone:''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e)=>{
    e.preventDefault();
    this.props.onCreate(this.state)
    this.setState({
      name: '',
      phone: ''
    })
    document.querySelector('.input-name').value = ''
    document.querySelector('.input-phone').value = ''
  }

  render(){
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="이름을 입력하세요" className="input-name"
          name="name" onChange={this.handleChange.bind(this)}/>
          <input type="text" placeholder="전화번호를 입력하세요" className="input-phone"
          name="phone" onChange={this.handleChange.bind(this)}/>
          <button>등록</button>
        </form>
        {
          this.props.information.map((list)=>
            <Phonelist 
            information={list}
            key={list.id}
            onRemove={this.props.onRemove}
            onUpdate={this.props.onUpdate}/>
          )
        }
      </div>
    )
  }
}

export default PhoneForm;
