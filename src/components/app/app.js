import React, { Component } from 'react'; // без этого вебпак не работает с JSX
import './app.css'

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import ItmeAddForm from '../item-add-form/item-add-form';


export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      { label: 'Поесть шашлык', important: true, id: 1 },
      { label: 'Выпить баганы', important: false, id: 2 },
      { label: 'Поесть зелень', important: false, id: 3 },
    ]
  };

  deletesItem = (id) => {
    this.setState(({ todoData }) => { //передаем ф-цию, а не объект, т.к. setState - асинхронный см. вниз
      const idx = todoData.findIndex((el) => el.id === id);

      const before = todoData.slice(0, idx); // эл-ты до удаляемого
      const after = todoData.slice(idx + 1); // все эл-ы после удаляемого
      const newArray = [...before, ...after] // не перезаписываем setState путем изменения todoData, а создаем новый массив

      return {
        todoData: newArray // присваивать новый массив можно, а перезаписывать нельзя
      }

    })
  };

  addItem = (text) => {
    const newItem = { // новый элемент
      label: text,
      important: false,
      id: this.maxId++ // с id 100...
    }

    this.setState(({todoData}) => { // передаем ф-цию, а не объект, т.к. важно предыдущее состояние см. наверх
      const newArr = [ ...todoData, newItem ]; // новый массив, а не меняем старый
      return { // возвращаем новый массив и ревкт понимает, что поменялось что-то
        todoData: newArr // присваивать новый массив можно, а перезаписывать нельзя
      };
    });
  }

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
        <ItmeAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
}