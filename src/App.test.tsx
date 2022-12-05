import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/This is going to be a chore app with cool features... someday???/i);
  expect(linkElement).toBeInTheDocument();
});
