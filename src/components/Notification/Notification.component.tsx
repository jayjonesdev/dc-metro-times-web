import React from 'react';
import {
  Incident,
  IncidentColor,
  IncidentType,
  Line,
} from '../../types/rail.types';
import FilledCircle from '../FilledCircle/FilledCircle.component';
import IncidentIcon from '../IncidentIcon/IncidentIcon.component';

type TNotification = Incident;

const Notification: React.FC<TNotification> = ({
  IncidentType: incidentType,
  Description,
  LinesAffected,
}) => {
  const borderColor = `${
    incidentType in IncidentColor
      ? IncidentColor[incidentType as IncidentType]
      : IncidentColor.Default
  }`;
  const affectedLines = LinesAffected.split(/;[\s]?/);

  return (
    <div
      style={{ zIndex: 102 }}
      className={`h-44 w-1/3 rounded-lg text-gray-100 p-6 border-4 ${borderColor} bg-gray-500 flex flex-start flex-col`}
    >
      <div className='flex'>
        <IncidentIcon
          incident={incidentType}
          className='mr-2 h-7 w-7 text-white font-bold'
        />
        <div>
          <h3 className='text-md font-semibold mb-4'>{Description}</h3>
          <div className='flex flex-row'>
            <p className='mr-4 font-sm'>Lines Affected:</p>
            <div className='flex items-center'>
              {affectedLines.map((line) =>
                line !== '' ? (
                  <FilledCircle
                    key={line}
                    className='mr-2'
                    line={line as Line}
                  />
                ) : (
                  <></>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <button
        type='button'
        className='self-end font-medium rounded-lg text-sm text-center shadow-lg shadow-gray-500/50 dark:bg-gray-600 dark:hover:bg-gray-700 px-4 py-2.5'
      >
        Close
      </button>
    </div>
  );
};

export default Notification;
