import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navbar brand', () => {
  render(<App />);
  const brandElements = screen.getAllByText(/event planner/i);
  expect(brandElements.length).toBeGreaterThan(0);
});
