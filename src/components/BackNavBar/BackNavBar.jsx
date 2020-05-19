import React from 'react'
import './BackNavBar.scss'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from "react-router-dom";


const BackNavBar = () => {

  return (
    <div className='back_navbar'>
      <Link to='/'><ArrowBackIcon style={{color:'#ccc'}} /></Link>
    </div>
  )
}

export default BackNavBar