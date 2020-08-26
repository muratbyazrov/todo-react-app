import React from 'react'; // без этого вебпак не работает с JSX
import './search-panel.css';

// создали реакт-элемент
const SearchPanel = () => {
  return <input placeholder='search' className='form-control search-input' />
}

export default SearchPanel;