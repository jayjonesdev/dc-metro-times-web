import React from 'react';
import {
  ExclamationCircleIcon,
  ExclamationIcon,
  BellIcon,
} from '@heroicons/react/outline';

const IncidentIcon: React.FC<{ incident: string; className: string }> = ({
  incident,
  className,
}) => {
  switch (incident) {
    case 'Alert':
      return <ExclamationCircleIcon className={className} />;
    case 'Delay':
      return <ExclamationIcon className={className} />;
    default:
      return <BellIcon className={className} />;
  }
};

export default IncidentIcon;
