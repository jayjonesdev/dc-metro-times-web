import { screen, render } from '@testing-library/react';
import { railFields } from '../../constants/transitFields';
import Header from './Header.component';

it('Transit Information has text of `Georgia Ave-Petworth`', () => {
  render(
    <table>
      <Header fields={railFields} />
    </table>
  );
  const header = screen.getByTestId('header');

  railFields.every((field) => expect(header).toHaveTextContent(field.label));
});
