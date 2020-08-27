import React, { Component } from 'react'; // без этого вебпак не работает с JSX
import './app.css'

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from "../item-status-filter/item-status-filter";


export default class App extends Component {
  state = {
    todoData: [
      { label: 'Поесть шашлык', important: true, id: 1 },
      { label: 'Выпить баганы', important: false, id: 2 },
      { label: 'Поесть зелень', important: false, id: 3 },
    ]
  };

  deletesItem = (id) => {
    this.setState(({ todoData }) => { // именно ф-ция, так как важно предыдущее состояние
      const idx = todoData.findIndex((el) => el.id === id);

      const before = todoData.slice(0, idx); // эл-ты до удаляемого
      const after = todoData.slice(idx + 1); // все эл-ы после удаляемого
      const newArray = [...before, ...after] // не перезаписываем setState путем изменения todoData, а создаем новый массив

      return {
        todoData: newArray
      }

    })
  };

  render() {
    return (
      <div className='todo-app'>
        <AppHeader todo={1} done={3} />
        <div className='top-panel d-flex'>
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={this.state.todoData}
          onDeleted={this.deletesItem} /> {/* onDeleted - св-во, перед-ся на TodoList */}
      </div>
    );
  }
}