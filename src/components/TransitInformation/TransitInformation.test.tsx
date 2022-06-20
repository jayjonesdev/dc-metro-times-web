import { screen, render } from '@testing-library/react';
import { railFields } from '../../constants/transitFields';
import TransitInformation from './TransitInformation.component';
import { railPredictions } from './mockTrainData';

it('Transit Information has text of `Georgia Ave-Petworth`', () => {
  render(
    <table>
      <tbody>
        <TransitInformation vehicle={railPredictions[0]} fields={railFields} />
      </tbody>
    </table>
  );
  const row = screen.getByTestId('row');

  expect(row).toHaveTextContent('Georgia Ave-Petworth');
});
