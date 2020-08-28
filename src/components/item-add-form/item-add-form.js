import React, { Component } from 'react'; // без этого вебпак не работает с JSX
import './item-add-form.css'

export default class ItmeAddForm extends Component {
  render() {
    return (
      <div className='item-add-form'>
        <button
        className='btn btn-outline-secondary'
        onClick={ () => this.props.onItemAdded('Hellow word')}> {/*всегда  () => */}
          Add
        </button>
      </div>
    )
  }
}