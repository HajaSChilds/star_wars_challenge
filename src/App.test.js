import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Timeline from '@material-ui/lab/Timeline';

test('renders title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/STAR WARS/);
  expect(linkElement).toBeInTheDocument();
});

