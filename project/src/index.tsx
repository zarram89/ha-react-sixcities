import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app/app';
import city from './mocks/city';
import offers from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App city={city} offers={offers} />
  </React.StrictMode>,
);
