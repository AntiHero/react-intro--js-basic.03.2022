import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import Button from '.';

test('should render Button', async () => {
  console.log(document.body.innerHTML, 'before');
  render(<Button />); 

  const button = screen.getByText(/[0]/);
  expect(button).toBeInTheDocument();
  
  userEvent.click(button);

  expect(await screen.findByText('1')).toBeInTheDocument();
});
