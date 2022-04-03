import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freela de website',
          value: 6000,
          type: 'deposit',
          category: 'Desenvolvimento',
          createdAt: new Date('2022-03-02 18:00:00'),
        },
        {
          id: 2,
          title: 'Alguel',
          value: 1200,
          type: 'withdraw',
          category: 'Casa',
          createdAt: new Date('2022-02-15 14:00:00'),
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      const transaction = {
        ...data,
        createdAt: new Date('2022-03-02 18:00:00')
      }

      return schema.create('transaction', transaction);
    });
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
