import React from 'react';
import {
  RailIncident,
  IncidentColor,
  IncidentType,
  Line,
} from '../../types/rail.types';
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
  const borderColor = `${
    incidentType in IncidentColor
      ? IncidentColor[incidentType as IncidentType]
      : IncidentColor.Default
  }`;
  const affectedLines = LinesAffected.split(/;[\s]?/);
  const [,setShow] = React.useState<boolean>(true);
  const close = () => {
    onClick();
    setShow(false);
  };

  React.useEffect(() => {
    setShow(true);
  }, [IncidentID]);

  return (
    <div
      id={id}
      style={{ zIndex: 102 }}
      className={`notification ${borderColor}`}
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

      <button type='button' className='close-button' onClick={close}>
        Close
      </button>
    </div>
  );
};

export default Notification;
