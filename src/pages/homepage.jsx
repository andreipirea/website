import React from 'react';
import './homepage.styles.scss'
import HeroImage from '../components/heroimage/HeroImage'
import NavBar from '../components/navbar/Navbar'
import TodoForm from '../components/todoform3/TodoForm'



const HomePage = () => {
  

  return (
    <div>
      <NavBar/>
      <HeroImage/>
      <TodoForm/>
    </div>
  )
}

export default HomePage