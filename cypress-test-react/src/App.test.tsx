import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {mount} from '@cypress/react';


it('renders learn react link fail test', () => {
  mount(<App />);
  cy.get('a').contains('sdahdjashdkjash');
});

it('renders learn react link pass test', () => {
  mount(<App />);
  cy.get('a').contains('Learn React');
});

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
