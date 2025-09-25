import { render, screen } from '@testing-library/react';
import App from './App';

let offcanvasPortal;

beforeEach(() => {
  offcanvasPortal = document.createElement('div');
  offcanvasPortal.setAttribute('id', 'offcanvas-portal');
  document.body.appendChild(offcanvasPortal);
});

afterEach(() => {
  document.body.removeChild(offcanvasPortal);
});

test('renders the learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// describe('App', () => {
//   it('renders the learn react link', () => {
//     const container = document.createElement('div');
//     container.id = 'offcanvas-portal';
//     document.body.appendChild(container);

//     const {getByText} = render(<App />, {
//       container: container
//     });

//     expect(getByText(/learn ract/i)).toBeInTheDocument();
//     document.body.removeChild(container);
//   })
// })