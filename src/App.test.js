import { render } from '@testing-library/react';
import App from './App';

// beforeAll(() => {
//   const offcanvasPortal = document.createElement('div');
//   offcanvasPortal.id = 'offcanvas-portal';
//   document.body.appendChild(offcanvasPortal);
// });

describe('App', () => {
  it('renders the learn react link', () => {
    const container = document.createElement('div');
    container.id = 'offcanvas-portal';
    document.body.appendChild(container);

    const {getByText} = render(<App />, {
      container: container
    });

    expect(getByText(/learn ract/i)).toBeInTheDocument();
    document.body.removeChild(container);
  })
})