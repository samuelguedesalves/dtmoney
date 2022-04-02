import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createServer } from 'miragejs';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Almoço',
          amount: 24.50,
          type: 'deposit',
          category: 'food',
          createdAt: new Date(),
        }
      ]
    });
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
