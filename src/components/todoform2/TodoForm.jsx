import React, { useState, useEffect } from "react";
import "./TodoForm.scss";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Container } from 'reactstrap'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CreateIcon from '@material-ui/icons/Create';
import { green } from '@material-ui/core/colors';
import { red } from '@material-ui/core/colors';
import Footer from '../Footer/Footer'
import NavBar from '../navbarTM/Navbar'

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width:'90%',
      backgroundColor: '#1d222b',
      border: '1px solid #444',
      borderRadius: '20px',
      },
     "& .MuiOutlinedInput-root":{
        borderRadius: '20px'
      },
      "& .MuiInputLabel-outlined": {
        color: '#ccc'
      },
      "& .MuiInputBase-input": {
        color: '#ccc'
      }
  }
}));



const TodoForm = () => {
  const classes = useStyles();
  // const [value, setValue] = React.useState('Controlled');
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [taskList, setTaskList] = useState([])
  const [taskID, setTaskID] = useState(null)
  const [editActive, setEditActive] = useState(false)

  useEffect(() => {
    const data = localStorage.getItem('tasks', JSON.stringify('tasks'))
    
    if(data){
      setTaskList(JSON.parse(data))
    }

  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskList))
  })


  const handleAddTask = e => {
    if (title === '' && content === '') {
      alert('Please fill in the fields!')
    } else {

      let taskObj = {title: title, content: content }
      taskList.push(taskObj)
      localStorage.setItem('tasks', JSON.stringify(taskList))
      
      setTitle('')
      setContent('')
    }
    e.preventDefault()
  };



  const handleClear = e => {
    setTaskList([])
    localStorage.setItem('tasks', null)
    setEditActive(false)
    e.preventDefault()
  }

  const handleDelete = (id) => {
    let deletedItem = [...taskList]
    deletedItem.splice(id, 1)
    setTaskList(deletedItem)
    setTitle('')
    setContent('')
    setEditActive(false)
  } 


  const findItem = idx => {
    const chosenItem = [...taskList]

    const specificItem = chosenItem[idx]
    setTitle(specificItem.title)
    setContent(specificItem.content)

    setTaskID(idx)
    setEditActive(true)
  }

  const handleEditTask = e => {
    if (title === '' && content === '') {
      alert('Please fill in the fields!')
    } else {
      let taskObj = {title: title, content: content }
      taskList.splice(taskID, 1, taskObj)
      setTaskList([...taskList])
      setTitle('')
      setContent('')
    }
    console.log('task list edit item', taskList)
    setEditActive(false)
    e.preventDefault()
  }

  const showTasks = taskList.map((item, index) => (
    <>
      {item !== undefined && item !== null &&
        <div className='task' id={index} key={index}>
          <div>
            <div className='trash' >
              <DeleteForeverIcon style={{ color: red[500] }} onClick={() => handleDelete(index)} />
            </div>
            <div className='pen'>
              <CreateIcon style={{ color: green[500] }} onClick={() => findItem(index)}/>
            </div>
          </div>
          <div className='list-item'>
            <div>
              <h6 className='title'>{item.title}</h6>
              <p>{item.content}</p>
            </div>

          </div>
        </div>
      }
    </>
  )
  )

  return (
    <>
    <NavBar />
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
            {editActive ? (
              <button
                className="btn add-task-btn edit"
              onClick={handleEditTask}
              >
                Edit Task
              </button>
            ) : (
                <button
                  className="btn add-task-btn"
                  onClick={handleAddTask}
                >
                  Add Task
              </button>
              )}

            <button
              className="btn clear-btn"
            onClick={handleClear}
            >Clear</button>
            <div className='list'>
              {
                showTasks.length ? (
                  showTasks
                ) : (
                    <div className="no-tasks">No Tasks</div>
                  )
              }
            </div>
          </form>
        </div>
      </Container>
    </div>
    <Footer/>
    </>
  );
};

export default TodoForm;
