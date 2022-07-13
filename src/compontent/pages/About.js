import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { employeeSelector, getEmployees, createEmployees, updateEmployees, deleteEmployees } from '../../features/employees'

import { ListGroup, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  const [newEmployee, setNewEmployee] = useState(null)
  const [employeeId, setEmployeeId] = useState(null)

  const { employees } = useSelector(employeeSelector)


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getEmployees())
  }, [dispatch])

  const handleSubmit = () => {
    const data= {
      name: newEmployee,
      role: 'employee'
    }
   dispatch(createEmployees(data))
   dispatch(getEmployees())


  }

  const handleUpdate = (id, name) => {
    console.log(id, name)
    setNewEmployee(name)
    setEmployeeId(id)
  }

  const handleSaveEdit =()=>{
    const data= {
      id: employeeId,
      name: newEmployee,
      role: 'employee'
    }
   dispatch(updateEmployees(data))
   dispatch(getEmployees())

  }

  const handleChange = (e) => {
    setNewEmployee( e.target.value)
  }

  const handleDelete = (id) => {
    console.log(id)
    dispatch(deleteEmployees(id))
    dispatch(getEmployees())
  }

    return (
      <div style={{padding: '20px'}}>
         <div>
            <Form.Label htmlFor="inputPassword5">Add Todo</Form.Label>
            <Form.Control
              defaultValue= {newEmployee}
              type="text"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              onChange={handleChange}
            />
            <Button variant="success" style={{margin: '30px'}} onClick={handleSubmit}>
              Add Employee
            </Button>
            <Button variant="success" style={{margin: '30px'}} onClick={handleSaveEdit}>
              Save Edit
            </Button>
          </div>
        {employees?.map((employee) => 
        <ListGroup key={employee.id}>
          <ListGroup.Item>{employee.id} . {employee.name}
          <Button value={employee.id} variant="danger" size="sm" style={{ marginLeft: '5px', float: 'right', fontSize: '0.70rem'}} onClick={()=>handleDelete(employee.id)}>
            Delete
          </Button>
          <Button value={employee.name} variant="success" size="sm" style={{ float: 'right', fontSize: '0.70rem'}} onClick={()=>handleUpdate(employee.id, employee.name)}>
            update
          </Button>
          </ListGroup.Item>
        </ListGroup>
        )} 
      </div>
    );
  }
  
  export default About;
  