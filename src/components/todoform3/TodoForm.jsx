import React, { useState, useEffect } from "react";
import "./TodoForm.scss";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Container } from "reactstrap";
import Task from "./Task";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import CreateIcon from "@material-ui/icons/Create";
import { green } from "@material-ui/core/colors";
import { red } from "@material-ui/core/colors";
import { http } from "../../context/api";

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
  const [taskList, setTaskList] = useState([]);
  const [taskID, setTaskID] = useState(null);
  const [editActive, setEditActive] = useState(false);

  const getPosts = () => {
    http
      .get("http://localhost:3000/tasks")
      .then(data => setTaskList(data))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getPosts()
  }, []);


  const handleAddTask = e => {
    if (title === '' && content === '') {
      alert('Please fill in the fields!')
    } else {
      const data = {
        title,
        content
      }
      http.post("http://localhost:3000/tasks", data)
        .then(data => {
          getPosts()
        })
        .catch(err => console.log(err))
      // setTaskList([...taskList, <Task title={title} content={content} />])
      setTitle('')
      setContent('')
    }
    e.preventDefault()
  };

  const handleClear = e => {
    taskList.map((item) => {
      http.delete(`http://localhost:3000/tasks/${item.id}`)
        .then(data => {
          getPosts()
        })
    })
    e.preventDefault()
  }

  const handleDelete = id => {
    http.delete(`http://localhost:3000/tasks/${id}`)
      .then(data => {
        getPosts()
      })
  }

  const findItem = idx => {
    const chosenItem = [...taskList]

    const specificItem = chosenItem[idx]
    setTitle(specificItem.title)
    setContent(specificItem.content)
    
    setTaskID(specificItem.id)
    setEditActive(true)
  }

  const handleEditTask = e => {
    if (title === '' && content === '') {
      alert('Please fill in the fields!')
    } else {
      const data = {
        title,
        content
      }
      http.put(`http://localhost:3000/tasks/${taskID}`, data)
        .then(data => {
          getPosts()
        })
      // taskList.splice(taskID, 1, data)
      // setTaskList([...taskList])
      setTitle('')
      setContent('')
    }
    setEditActive(false)
    e.preventDefault()
  }

  const showTasks = taskList.map((item, index) => (
    <>
      {item !== undefined && item !== null && (
        <div className="task" key={item.id}>
          <div>
            <div className="trash"  onClick={() => handleDelete(item.id)}>
              <DeleteForeverIcon style={{ color: red[500] }}/>
            </div>
            <div className="pen" onClick={() => findItem(index)}>
              <CreateIcon style={{ color: green[500] }} />
            </div>
          </div>
          <div className="list-item">
            <div>
              <h6 className="title">{item.title}</h6>
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      )}
    </>
  ));

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
              onClick={handleClear}
            >
              Clear
            </button>
            <div className="list">
              {showTasks.length ? (
                showTasks
              ) : (
                <div className="no-tasks">No Tasks</div>
              )}
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default TodoForm;
