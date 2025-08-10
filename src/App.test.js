import React from 'react';
import { render, screen } from '@testing-library/react';

test('renders placeholder text', () => {
  render(<div>Serenity Rehabilitation Center</div>);
  expect(
    screen.getByText(/Serenity Rehabilitation Center/i)
  ).toBeInTheDocument();
});

