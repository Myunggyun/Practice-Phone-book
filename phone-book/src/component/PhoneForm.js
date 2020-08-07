import React, { Component } from 'react';
import Phonelist from './Phonelist'

class PhoneForm extends Component {
  handleChange = (e) => {
    console.log(e.target.value)
  }

  render(){
    return (
      <div className="form">
        <form>
          <input type="text" placeholder="이름을 입력하세요"
           onChange={this.handleChange.bind(this)}/>
          <input type="text" placeholder="전화번호를 입력하세요"/>
          <button>등록</button>
        </form>
        {
          this.props.information.map((list)=>
            <Phonelist information={list} key={list.id}/>
          )
        }
      </div>
    )
  }
}

export default PhoneForm;
