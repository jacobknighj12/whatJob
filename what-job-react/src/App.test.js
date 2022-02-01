import { render, screen } from '@testing-library/react';
import App from './App';

test('renders whatJob title on screen', () => {
  render(<App />);
  const buttonElement = screen.getByText(/whatJob?/i);
  expect(buttonElement).toBeInTheDocument();
});
