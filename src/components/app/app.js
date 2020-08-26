import React from 'react'; // без этого вебпак не работает с JSX
import './app.css'

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from "../item-status-filter/item-status-filter";


// писать элементы с большой буквы. С маленькой верстка
const App = () => {

  const todoData = [
    { label: 'Поесть шашлык', important: true, id: 1 },
    { label: 'Выпить баганы', important: false, id: 2 },
    { label: 'Поесть зелень', important: false, id: 3 },
  ];

  return (
    <div className='todo-app'>
      <AppHeader todo={1} done={3} />
      <div className='top-panel d-flex'>
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} />
    </div>
  )
}

export default App;