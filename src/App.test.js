import { render, screen } from '@testing-library/react';
import Component from './pages/Calendrier';

test('renders learn react link', () => {
  render(<Component />);
  const linkElement = screen.getByText(/Calendrier/i);
  expect(linkElement).toBeInTheDocument();
});
