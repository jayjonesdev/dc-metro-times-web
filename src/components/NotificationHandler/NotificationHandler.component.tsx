import React from 'react';
import { RailIncident } from '../../types/rail.types';
import Notification from '../Notification/Notification.component';

const NotificationHandler: React.FC<{ incidents: RailIncident[] }> = ({
  incidents,
}) => {
  const [activeIncidents, setActiveIncidents] = React.useState<
    React.ReactElement[]
  >([]);
  const [currentIncident, setCurrentIncident] = React.useState<number>(0);

  React.useEffect(() => {
    const updatedIncidents = removeAcknowledgedIncidents(incidents).map(
      (incident) => (
        <Notification
          key={incident.IncidentID}
          {...incident}
          onClick={() => {
            acknowledgeNotification(incident.IncidentID, incident.DateUpdated);
          }}
        />
      )
    );

    setActiveIncidents(updatedIncidents);
  }, [incidents]);

  const removeAcknowledgedIncidents = (incidents: RailIncident[]) => {
    return incidents.filter(
      (incident) => !localStorage.getItem(incident.IncidentID)
    );
  };

  const acknowledgeNotification = (incidentId: string, dateUpdated: string) => {
    localStorage.setItem(incidentId, dateUpdated);

    if (currentIncident === activeIncidents.length - 1) {
      setActiveIncidents([]);
      setCurrentIncident(0);
    } else {
      setCurrentIncident((index) => (index += 1));
    }
  };

  return activeIncidents[currentIncident] ?? null;
};

export default NotificationHandler;
