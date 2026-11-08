import { render, screen } from '@testing-library/react-native';
import React from 'react';

import App from '@/App';

jest.mock('@react-native-community/netinfo', () =>
  require('@react-native-community/netinfo/jest/netinfo-mock.js')
);

test('renders correctly', async () => {
  await render(<App />);
  expect(screen.toJSON()).toMatchSnapshot();
});
