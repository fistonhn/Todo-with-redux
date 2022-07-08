import {useState, useEffect} from 'react'
import axios from 'axios'

import { ListGroup, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  const [newItem, setNewItem] = useState('')
  const [todos, setTodos] = useState([])

  const handleChange = (e) => {
    setNewItem(   {
      todoValue: e.target.value,
    },)
  }

  const newValue = newItem

  const handleSubmit = () => {
    setTodos([...newItem, newValue])

    console.log(todos)

  }

  const todoList = axios.get('https://jsonplaceholder.typicode.com/todos', {
    params: {
      _limit: 10
     }
  }).then((allTodos) => {
    setTodos(allTodos.data)

  })

  console.log('todos', todos)


    return (
      <div style={{padding: '20px'}}>
          <Form.Label htmlFor="inputPassword5">Add Todo</Form.Label>
          <Form.Control
            type="text"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            onChange={handleChange}
          />
          <Button variant="success" style={{margin: '30px'}} onClick={handleSubmit}>
            Add Todo
          </Button>
        {todos?.map((todo) => 
        <ListGroup key={todo.id}>
          <ListGroup.Item>{todo.title}</ListGroup.Item>
        </ListGroup>
        )} 
      </div>
    );
  }
  
  export default About;
  