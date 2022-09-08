import React from 'react';
import { Line, NotificationType } from '../../types/rail.types';
import FilledCircle from '../FilledCircle/FilledCircle.component';
import IncidentIcon from '../IncidentIcon/IncidentIcon.component';
import './mobileNotification.styles.css';

const MobileNotification = ({
  IncidentType: incidentType,
  Description,
  LinesAffected,
  id,
  onClick,
}: NotificationType) => {
  const backgroundColor = () => {
    switch (incidentType) {
      case 'Alert':
        return 'bg-rose-500';
      case 'Delay':
        return 'bg-amber-400';
      default:
        return 'bg-zinc-400';
    }
  };
  const textColor = () => {
    switch (incidentType) {
      case 'Alert':
        return 'text-white';
      case 'Delay':
        return 'text-white';
      default:
        return 'text-black';
    }
  };
  const affectedLines = LinesAffected.split(/;[\s]?/);

  const [touchStart, setTouchStart] = React.useState<[number, number]>([0, 0]);
  const [touchEnd, setTouchEnd] = React.useState<[number, number]>([0, 0]);

  const handleTouchStart = (event: TouchEvent) => {
    const x = event.changedTouches[0].screenX;
    const y = event.changedTouches[0].screenY;

    setTouchStart([x, y]);
  };

  const handleTouchEnd = (event: TouchEvent) => {
    const x = event.changedTouches[0].screenX;
    const y = event.changedTouches[0].screenY;

    setTouchEnd([x, y]);
  };

  React.useEffect(() => {
    const element = document.getElementById(id);

    element!.addEventListener('touchstart', handleTouchStart);
    element!.addEventListener('touchend', handleTouchEnd);

    return () => {
      element!.removeEventListener('touchstart', handleTouchStart);
      element!.removeEventListener('touchend', handleTouchEnd);
    };
  }, [id]);

  React.useEffect(() => {
    if (touchEnd[1] > touchStart[1]) {
      onClick();
    }
  }, [touchEnd, touchStart, onClick]);

  return (
    <div
      id={id}
      style={{ zIndex: 102 }}
      className={`${backgroundColor()} ${textColor()} mobile-notification`}
    >
      <IncidentIcon incident={incidentType} className='mobile-incident-icon' />
      <div className='text-base font-semibold'>
        {Description}
        <div className='mt-2 flex items-center'>
          <p className='mr-2'>Lines Affected:</p>
          {affectedLines.map((line) =>
            line !== '' ? (
              <FilledCircle key={line} className='mr-2' line={line as Line} />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileNotification;
