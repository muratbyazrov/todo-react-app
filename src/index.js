import React from 'react';  // вебпак при сборке JSX использует эту библиотеку
import ReactDOM from 'react-dom'; // преобразует реакт-элемент в реальную верстку

import App from "./components/app/app";

// помнить, что первый параметр - это элемент, но не компонент
ReactDOM.render(<App />, document.getElementById('root'))