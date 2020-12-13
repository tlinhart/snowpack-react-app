import * as React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import App from './App';

describe('<App>', () => {
  it('renders local time', () => {
    const { getByText } = render(<App />);
    const timeElement = getByText(/local time/i);
    expect(document.body.contains(timeElement));
  });
});
