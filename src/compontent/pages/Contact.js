import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { todoSelector, getTodos } from '../../features/todos'

const Contact = () => {
  const dispatch = useDispatch()

  const { todos } = useSelector(todoSelector)

  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch])

  console.log(todos)


    return (
      <div>
          Our contact page
      </div>
    );
  }
  
  export default Contact;
  