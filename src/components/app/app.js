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
      this.createTodoItem('Поесть шашлык'),
      this.createTodoItem('Выпить баганы'),
      this.createTodoItem('Поесть зелень'),
    ]
  };

  createTodoItem(label) { // создает item
    return {
      label, // текст
      important: false,
      done: false,
      id: this.maxId++ // с id 100...
    }
  }

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
    const newItem = this.createTodoItem(text)

    this.setState(({ todoData }) => { // передаем ф-цию, а не объект, т.к. важно предыдущее состояние см. наверх
      const newArr = [...todoData, newItem]; // новый массив, а не меняем старый
      return { // возвращаем новый массив и ревкт понимает, что поменялось что-то
        todoData: newArr // присваивать новый массив можно, а перезаписывать нельзя
      };
    });
  };

  // эта функция возвращает обновленный массив
  toggleProperty(arr, id, propName) {
    // 1. надо обновить массив
    const idx = arr.findIndex((el) => el.id === id); // нашли элемент по id
    const oldItem = arr[idx] // старый объект
    const newItem = { ...oldItem, [propName]: !oldItem[propName] } // скопировали старый объект и перезаписали св-во done. Уточнить про квадратные скобки
    // 2. сконструировать новый массив (старый менять нельзя)
    return [ // мы не меняем страый state, а создаем новый массив
      ...arr.slice(0, idx), // все элементы до обновляемого
      newItem, // обновляемый элемент
      ...arr.slice(idx + 1) // все элементы после обновляемого
    ]
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => { // передаем ф-цию, т.к. старый массив нужен
      return {
        todoData: this.toggleProperty(todoData, id, 'done') // записываем обновленный массив
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => { // передаем ф-цию, т.к. старый массив нужен
      return {
        todoData: this.toggleProperty(todoData, id, 'important') // записываем обновленный массив
      };
    });
  };

  render() {
    const doneCount = this.state.todoData.filter((el) => el.done).length; // фильтр по done=true - выполненные
    const todoCount = this.state.todoData.length - doneCount; // осталось выполнить
    return (
      <div className='todo-app'>
        <AppHeader todo={todoCount} done={doneCount} />
        <div className='top-panel d-flex'>
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={this.state.todoData}
          onDeleted={this.deletesItem} /* onDeleted - св-во, перед-ся на TodoList */
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone} />
        <ItmeAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
}