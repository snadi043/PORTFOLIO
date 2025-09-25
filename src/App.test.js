import { render } from '@testing-library/react';
import App from './App';

beforeAll(() => {
  const offcanvasPortal = document.createElement('div');
  offcanvasPortal.id = 'offcanvas-portal';
  document.body.appendChild(offcanvasPortal);
});

describe('App', () => {
  it('renders the learn react link', () => {
    const OffcanvasPortalElement = document.createElement('div');
    OffcanvasPortalElement.id = 'offcanvas-portal';
    document.body.appendChild(OffcanvasPortalElement);

    const {getByText} = render(<App/>, {
      container: OffcanvasPortalElement
    });

    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  })
})