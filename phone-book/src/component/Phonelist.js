import React from 'react';

const Phonelist = ({information})=> {
  return (
    <div className="list">
      <div className="name">{information.name}</div>
      <div className="phone">{information.phone}</div>
    </div>
  )
}

export default Phonelist
