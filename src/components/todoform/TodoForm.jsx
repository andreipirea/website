import React, { useState, useEffect } from "react";
import "./TodoForm.scss";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Container } from 'reactstrap'
import Task from './Task'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CreateIcon from '@material-ui/icons/Create';
import { green } from '@material-ui/core/colors';
import { red } from '@material-ui/core/colors';
import firebase from '../firebase/firebase'

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

function useTasks() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    firebase
      .firestore()
      .collection('tasks')
      .onSnapshot(snapshot => {
        const newTasks = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setTasks(newTasks)
      })
  }, [])
  return tasks
}

const TodoForm = () => {
  const tasks = useTasks()
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [taskID, setTaskID] = useState(null)
  const [editActive, setEditActive] = useState(false)

  const handleAddTask = e => {
    if (title === '' && content === '') {
      alert('Please fill in the fields!')
    } else {
      firebase
        .firestore()
        .collection('tasks')
        .add({
          title,
          content
        })
        .then(() => {
          setTitle('')
          setContent('')
        })
    }
    e.preventDefault()
  };

  const handleClear = e => {
    tasks.map(task => {

      firebase
          .firestore()
          .collection('tasks')
          .doc(task.id)
          .delete()
          .then(function() {
            console.log("Document successfully deleted!");
          }).catch(function(error) {
              console.error("Error removing document: ", error);
          });
    })

    e.preventDefault()
  }

  const handleDelete = id => {
    firebase
        .firestore()
        .collection('tasks')
        .doc(id)
        .delete()
        .then(function() {
          console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
        
  }

  const findItem = task => {
    setTitle(task.title)
    setContent(task.content)

    setTaskID(task.id)
    setEditActive(true)
  }

  const handleEditTask = e => {
    if (title === '' && content === '') {
      alert('Please fill in the fields!')
    } else {
      firebase
        .firestore()
        .collection('tasks')
        .doc(taskID)
        .update({
          title: title,
          content: content
        })
        .then(() => {
          setTitle('')
          setContent('')
        })
    }
    setEditActive(false)
    e.preventDefault()
  }

  const showTasks =  tasks.map(task => (

      <div className='task' id={task.id} key={task.id}>
        <div>
          <div className='trash' >
            <DeleteForeverIcon style={{ color: red[500] }} onClick={() => handleDelete(task.id)} />
          </div>
          <div className='pen' onClick={() => findItem(task)}>
            <CreateIcon style={{ color: green[500] }} />
          </div>
        </div>
        <div className='list-item'>
          <div>
            <h6 className='title'>{task.title}</h6>
            <p>{task.content}</p>
          </div>
        </div>
      </div>
    ))



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
              onClick={() => handleClear()}
            >
              Clear
            </button>
            <div className='list'>
              {
                tasks.length ? (
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
  );
};

export default TodoForm;
