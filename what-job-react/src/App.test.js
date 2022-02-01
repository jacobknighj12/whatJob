import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navbar button home', () => {
  render(<App />);
  const buttonElement = screen.getByText(/whatJob?/i);
  expect(buttonElement).toBeInTheDocument();
});
