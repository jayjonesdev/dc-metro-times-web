import { screen, render } from '@testing-library/react';
import Label from './Label.component';

it('Label has text of `Location:`', () => {
  render(<Label>Location</Label>);
  const label = screen.getByTestId('label');

  expect(label).toHaveTextContent('Location:');
});
