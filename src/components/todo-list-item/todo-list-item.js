import React, { Component } from 'react'; // без этого вебпак не работает с JSX
import './todo-list-item.css';

// если компнент работает с внутренним состоянием - используют компонент класс
export default class TodoListItem extends Component { // класс наследует React.Component
  onLabelClick = () => { // записали в ПОЛЕ КЛАССОВ, а не метод чтобы this был правильный
    this.setState({ // state менять можно только переопределяя объект
      done: !this.state.done
    })
  }

  onMarkImportant = () => {
    this.setState((state) => { /* state асинхронный. Если важно исходное сотояние, пишем в
      форме функции, котрая приинмает текущий state. Выше оставили как есть */
      return {
        important: !state.important
      } // принимает только ту часть, которую хотим поменять. Не надо тут done
    });
  };

  state = { // state хранит внутр. состояние компонента. Инициализирвть можно и в конструкторе
    done: false,
    important: false
  };

  render() {
    const { label, onDeleted } = this.props; // у класса props тут, а у ф-ци - параметры
    const { done, important } = this.state; // см. выше - управляет состоянием
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
          onClick={this.onLabelClick} > {/* обработка события методом класса. on + событие*/}
          {label}
        </span>

        <button type='button'
          className='btn btn-outline-success btn-sm float-right'
          onClick={this.onMarkImportant}>
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

