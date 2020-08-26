import React from 'react'; // без этого вебпак не работает с JSX
import './app-header.css'

// создали реакт-элемент
const AppHeader = ({ todo, done }) => {
  return (
    <div className='app-header d-flex'>
      <h1>My Todo List</h1>
      <h2>{todo} more to do, {done}</h2>
    </div>
  )
}

export default AppHeader;