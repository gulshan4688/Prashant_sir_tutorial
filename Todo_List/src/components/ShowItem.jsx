import React from 'react'

const ShowItem = (todoItems) => {
  return (
    <div>
        {todoItems.map((task,time)=>(
            <li>{todoItems.task}</li>
        ))}
    </div>
  )
}

export default ShowItem