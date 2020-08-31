import React, { Component } from 'react'; // без этого вебпак не работает с JSX
import './todo-list-item.css';

// если компнент работает с внутренним состоянием - используют компонент класс
export default class TodoListItem extends Component { // класс наследует React.Component

  render() {
    const { label, onDeleted, onToggleDone, onToggleImportant,
    important, done } = this.props; // у класса props тут, а у ф-ци - параметры
    let classNames = 'todo-list-item';

    if (done) {
      classNames += ' done'
    }

    if (important) {
      classNames += ' important'
    }

    return (
      <span className={classNames}>
        <span
          className='todo-list-item-label'
          onClick={ onToggleDone } > {/* обработка события методом, прходящим выше*/}
          {label}
        </span>

        <button type='button'
          className='btn btn-outline-success btn-sm float-right'
          onClick={ onToggleImportant }>
          <i className='fa fa-exclamation'></i>
        </button>

        <button type='button'
          className='btn btn-outline-danger btn-sm float-right'
          onClick={onDeleted}> {/* onDeleted ф-ция, которую передали из todoList как параметр */}
          <i className='fa fa-trash-o'></i>
        </button>
      </span>)
  }
}

