import React from 'react'; // без этого вебпак не работает с JSX
import './item-status-filter.css'

const ItemStatusFilter = () => {
  return (
    <div className='btn-group'>
      <button className='btn btn-info'>All</button>
      <button className='btn btn-outline-secondary'>Active</button>
      <button className='btn btn-outline-secondary'>Done</button>
    </div>
  )
}

export default ItemStatusFilter;