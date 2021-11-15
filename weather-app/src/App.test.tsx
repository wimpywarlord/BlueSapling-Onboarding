// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from 'react';
import { mount } from '@cypress/react';
import App from './App';
import store from "./redux/store";
import {Provider} from "react-redux";


it('WEAHTER REPORT BUTTON WORKS', () => {
  mount(<Provider store={store}> <App />  </Provider>);
  cy.contains('ABOUT') // 6.
      .click()
  cy.contains('WEATHER REPORT') // 6.
  .click()

});
