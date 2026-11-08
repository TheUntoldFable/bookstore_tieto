import { render, screen } from '@testing-library/react-native';
import React from 'react';

import App from '@/App';

test('renders correctly', async () => {
  await render(<App />);
  expect(screen.toJSON()).toMatchSnapshot();
});
