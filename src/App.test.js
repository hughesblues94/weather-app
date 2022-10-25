import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the text "weather app"', () => {
  render(<App />);
  const linkElement = screen.getByText('Weather App');
  expect(linkElement).toBeInTheDocument();
});
