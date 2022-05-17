import { screen, render } from '@testing-library/react';
import Label from '../Label/Label.component';
import Row from './Row.component';

it('Row has text of `Station: NoMa-Gallaudet`', () => {
  render(
    <Row>
      <Label>Station</Label>
      <div className='col-span-2'>NoMa-Gallaudet</div>
    </Row>
  );
  const row = screen.getByTestId('row');

  expect(row).toHaveTextContent('Station: NoMa-Gallaudet');
});
