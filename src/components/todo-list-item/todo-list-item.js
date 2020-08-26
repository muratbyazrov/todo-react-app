import React from 'react'; // без этого вебпак не работает с JSX
import './todo-list-item.css';

// создали реакт-элемент
// внутри props все параметры из todo-list. Нужный параметр взяли детруктуризацией
const TodoListItem = ({ label, important = false }) => { // дали значение по умолчанию
  const style = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal'
  }
  return (
    <span className='todo-list-item'>
      <span
        className='todo-list-item-label'
        style={style}>
        {label}
      </span>

      <button type='button'
        className='btn btn-outline-success btn-sm float-right'>
        <i className='fa fa-exclamation'></i>
      </button>

      <button type='button'
      className='btn btn-outline-danger btn-sm float-right'>
        <i className='fa fa-trash-o'></i>
      </button>
    </span>)
};

export default TodoListItem;

