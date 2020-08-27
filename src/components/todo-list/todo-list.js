import React from 'react'; // без этого вебпак не работает с JSX
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css' // вебпак соберет dvtcnt c css

// создали реакт-элемент
const TodoList = ({ todos, onDeleted }) => { // тут св-ва, которые передаются выше. об-т props

  const elements = todos.map((item) => {
    const { id, ...itemProps} = item; // в ...itemProps все свойства кроме id
    return (
      <li key={id} className='list-group-item'> {/* У каждого чайлд должно быть уникальное key. для быстроты рендера*/}
        <TodoListItem
        {...itemProps} /* эквивалентно label={item.label} important={item.important} */
        onDeleted={ () => onDeleted(id) }/> {/* свойство ф-ция, передается в todoListItem */}
      </li>
    )
  })

  return (
    <ul className='list-group todo-list'> {/* list-group уже определен в бутстрапе */}
      {elements}
    </ul>
  )
}

export default TodoList;