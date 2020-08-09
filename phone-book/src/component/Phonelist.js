import React, { Component } from 'react';

class Phonelist extends Component{
  state = {
    editing: false,
    name:'',
    phone:''
  }

  handleToggle = ()=>{//수정버튼을 누르면 껐다,켰다하는 기능
    const { editing } = this.state
    this.setState({ editing: !editing })
  }

  handleChange = (e)=>{
    const {name, value} = e.target;
    this.setState({
      [name]:value
    })
  }

  componentDidUpdate (prevProps, prevState){
    //prevProps는 이전 Props 값, prevState는 이전 state 값
    const {information, onUpdate} = this.props
    if(!prevState.editing && this.state.editing){
      //이전 상태값이 false이고 현재 state 값이 true일 때
      this.setState({
        name: information.name,
        phone: information.phone
      })
    }

    if(prevState.editing && !this.state.editing){
      //이전 상태값이 true이고 현재 state 값이 false 일 때
      onUpdate(information.id, {
        name: this.state.name,
        phone: this.state.phone
      });     
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 수정 상태가 아니고, info 값이 같다면 리렌더링 안함
    if (!this.state.editing  
        && !nextState.editing
        && nextProps.information === this.props.information) {
      return false;
    }
    // 나머지 경우엔 리렌더링함
    return true;
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
