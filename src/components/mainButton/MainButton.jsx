import React from 'react'
import { Link } from 'react-router'
import './mainButton.css'


function MainButton (props){
  return (
    <>
    {/* <Link to={props.link}> */}
    <button className="main-button" onClick={props.onClick} disabled={props.disabled}>
        {props.text}
    </button>
    {/* </Link> */}
    </>
  )
}

export default MainButton