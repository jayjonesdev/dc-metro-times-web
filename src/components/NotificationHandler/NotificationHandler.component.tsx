import React from 'react';
import { RailIncident } from '../../types/rail.types';
import Notification from '../Notification/Notification.component';

const NotificationHandler: React.FC<{ incidents: RailIncident[] }> = ({
  incidents,
}) => {
  const [activeIncidents, setActiveIncidents] = React.useState<RailIncident[]>(
    []
  );

  React.useEffect(() => {
    const updatedIncidents = removeAcknowledgedIncidents(incidents);
    setActiveIncidents(updatedIncidents);
  }, [incidents]);

  const removeAcknowledgedIncidents = (incidents: RailIncident[]) => {
    return incidents.filter(
      (incident) => !localStorage.getItem(incident.IncidentID)
    );
  };

  const removeNotification = () => {
    activeIncidents.splice(0, 1);
  };

  const acknowledgeNotification = (incidentId: string, dateUpdated: string) => {
    localStorage.setItem(incidentId, dateUpdated);
  };

  return activeIncidents.length > 0 ? (
    <Notification
      {...activeIncidents[0]}
      onClick={() => {
        acknowledgeNotification(
          activeIncidents[0].IncidentID,
          activeIncidents[0].DateUpdated
        );
        removeNotification();
      }}
    />
  ) : null;
};

export default NotificationHandler;
