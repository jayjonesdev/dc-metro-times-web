import { screen, render } from '@testing-library/react';
import { trainFields } from '../../constants/transitFields';
import Header from './Header.component';

it('Transit Information has text of `Georgia Ave-Petworth`', () => {
  render(
    <table>
      <Header fields={trainFields} />
    </table>
  );
  const header = screen.getByTestId('header');

  trainFields.every((field) => expect(header).toHaveTextContent(field.label));
});
