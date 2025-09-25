import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Before rendering App, set up the portal root in the document body
beforeAll(() => {
  const portalRoot = document.createElement('div');
  portalRoot.setAttribute('id', 'offcanvas-root');
  document.body.appendChild(portalRoot);
});

test('renders "Learn React" in the DOM', () => {
  render(<App />);
  
  const learnReactElement = screen.getByText(/learn react/i);
  expect(learnReactElement).toBeInTheDocument();
});