import React from 'react'



const Task = ({title, content}) => {

  return(
    <div className='list-item'>
      <div>
        <h6 className='title'>{title}</h6>
        <p>{content}</p>
      </div>
      
    </div>
  )
}
export default Task