import React from 'react';
import './switch.css'

function Switch(props) {
  return (
    <div id="toggle-switch">
      <input type="checkbox" id="toggle" className="checkbox" onClick={props.darkHandler}/>
      <label htmlFor="toggle" className="switch"></label>
    </div>
  )
}

export default Switch;