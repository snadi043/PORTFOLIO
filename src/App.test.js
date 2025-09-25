import { render, screen } from '@testing-library/react';
import App from './App';

beforeAll(() => {
  const offcanvasPortal = document.createElement('div');
  offcanvasPortal.id = 'offcanvas-portal';
  document.body.appendChild(offcanvasPortal);
});

describe('App', () => {
  it('renders the learn react link', () => {
    const OffcanvasPortalElement = screen.getById('offcanvas-portal');
    const {getByText} = render(<App/>, {
      container: OffcanvasPortalElement
    });
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  })
})