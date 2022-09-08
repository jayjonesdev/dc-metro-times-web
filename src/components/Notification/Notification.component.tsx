import React from 'react';
import {
  RailIncident,
  Line,
} from '../../types/rail.types';
import Button from '../Button/Button.component';
import FilledCircle from '../FilledCircle/FilledCircle.component';
import IncidentIcon from '../IncidentIcon/IncidentIcon.component';
import './notification.styles.css';

type TNotification = RailIncident;

const Notification: React.FC<
  TNotification & { onClick: () => void; id: string }
> = ({
  IncidentType: incidentType,
  Description,
  LinesAffected,
  IncidentID,
  id,
  onClick,
}) => {
  const borderColor = () => {
    switch (incidentType) {
      case 'Alert':
        return 'border-rose-500';
      case 'Delay':
        return 'border-amber-400';
      default:
        return 'border-zinc-400';
    }
  };
  const affectedLines = LinesAffected.split(/;[\s]?/);

  const close = () => {
    onClick();
  };

  return (
    <div
      id={id}
      style={{ zIndex: 102 }}
      className={`notification ${borderColor()}`}
    >
      <div className='flex'>
        <IncidentIcon incident={incidentType} className='incident-icon' />
        <div>
          <h3 className='description'>{Description}</h3>
          <div className='flex flex-row'>
            <p className='lines-affected'>Lines Affected:</p>
            <div className='flex items-center'>
              {affectedLines.map((line) =>
                line !== '' ? (
                  <FilledCircle
                    key={line}
                    className='mr-2'
                    line={line as Line}
                  />
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>

      <Button
        variant='secondary'
        onClick={close}
        className='close-button'
      >
        Close
      </Button>
    </div>
  );
};

export default Notification;
