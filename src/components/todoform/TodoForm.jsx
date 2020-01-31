import React, { useState } from "react";
import "./TodoForm.scss";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {Container} from 'reactstrap'
import Task from './Task'

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CreateIcon from '@material-ui/icons/Create';
import { green } from '@material-ui/core/colors';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

const TodoForm = () => {
  const classes = useStyles();
  // const [value, setValue] = React.useState('Controlled');
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [taskList, setTaskList] = useState([])
  const [editItem, setEditItem] = useState(null)

  const handleAddTask = e => {
    if(title === '' && content === ''){
      alert('Please fill in the fields!')
    }else{
    setTaskList([...taskList, <Task title={title} content={content} />])
    setTitle('')
    setContent('')
    }
    e.preventDefault()
  };

  const handleClear = e => {
    setTaskList([])
    e.preventDefault()
  }

  const handleDelete = index => {
    const deleteItem = [...taskList]
    delete deleteItem[index]
    setTaskList(deleteItem)
  }

  const findItem = idx => {
    const chosenItem = taskList.find(item => item.idx === idx)
    setEditItem(chosenItem)
    setTitle(editItem)
    console.log(editItem)
    // setTitle(e);
    // // setContent(e)
    // console.log(e)

    // e.preventDefault()
  }

  const showTasks = taskList.map((item, index) => (
    <>
      {item !== undefined && item !== null &&

      <div className='task' id={index} key={index}>
        <div>
          <div className='trash' onClick={() => handleDelete(index)}>
            <DeleteForeverIcon style={{ color: red[500]}} />
          </div>
          <div className='pen' onClick={() => findItem(index)}>
            <CreateIcon style={{ color: green[500] }}/>
          </div>
        </div>
        {item}
      </div>
      }
    </>
    )
  )

  return (
    <div className="taskform-container">
      <Container className="text-center">
        <div className="app-wrapper">
          <form className={classes.root} noValidate autoComplete="off">
            <h1>Task Manager</h1>
            <TextField
              id="outlined-textarea"
              label="Title"
              placeholder="Write your tile here"
              value={title}
              multiline
              variant="outlined"
              onChange={e => setTitle(e.target.value)}
            />
            <TextField
              id="outlined-multiline-static"
              label="Content"
              placeholder="Write your content here"
              value={content}
              multiline
              rows="4"
              variant="outlined"
              onChange={e => setContent(e.target.value)}
            />
            <button
              className="btn add-task-btn"
              onClick={handleAddTask}
            >
              Add Task
            </button>
            <button 
              className="btn clear-btn"
              onClick={handleClear}  
            >Clear</button>
            <div className='list'>
              {showTasks}
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default TodoForm;
