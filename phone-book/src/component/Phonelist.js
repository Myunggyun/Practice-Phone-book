import React, { Component } from 'react';

class Phonelist extends Component{
  state = {
    editing: false,
    name:'',
    phone:''
  }

  handleToggle = ()=>{
    const { editing } = this.state
    this.setState({ editing: !editing })
    console.log(editing)
  }

  handleChange = (e)=>{
    const {name, value} = e.target;
    this.setState({
      [name]:value
    })
  }

  componentDidUpdate (prevProps, prevState){
    const {information, onUpdate} = this.props
    if(!prevState.editing && this.state.editing){
      this.setState({
        name: information.name,
        phone: information.phone
      })
    }

    if(prevState.editing && !this.state.editing){
      onUpdate(information.id, {
        name: this.state.name,
        phone: this.state.phone
      });     
    }
  }

  render() {
    const {editing} = this.state
    if(editing) {
      return (
      <div className="list">
          <input value={this.state.name} placeholder="이름을 입력하세요" className="update-name"
          name="name" onChange={this.handleChange.bind(this)}/>
          <input value={this.state.phone} placeholder="전화번호를 입력하세요" className="update-phone"
          name="phone" onChange={this.handleChange.bind(this)}/>
        <span><button onClick={()=>this.handleToggle()}>적용</button></span>
      </div>
      )
    }

    return (
      <div className="list">
        <div className="name">{this.props.information.name}</div>
        <div className="phone">{this.props.information.phone}</div>
        <span><button onClick={()=>this.handleToggle()}>수정</button></span>
        <span><button onClick={()=>this.props.onRemove(this.props.information.id)}>삭제</button></span>
      </div>
    )
  }
}

export default Phonelist
