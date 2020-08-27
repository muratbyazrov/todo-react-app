import React, { Component } from 'react'; // без этого вебпак не работает с JSX
import './item-status-filter.css'

// если компнент работает с внутренним состоянием - используют компонент класс
export default class ItemStatusFilter extends Component {
  render() {
    return (
      <div className='btn-group'>
        <button className='btn btn-info'>All</button>
        <button className='btn btn-outline-secondary'>Active</button>
        <button className='btn btn-outline-secondary'>Done</button>
      </div>
    )
  }
}

