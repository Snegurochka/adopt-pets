import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Adopt me! link', () => {
  render(<App />);
  const linkElement = screen.getByAltText(/Adopt me!/i);
  expect(linkElement).toBeInTheDocument();
});
