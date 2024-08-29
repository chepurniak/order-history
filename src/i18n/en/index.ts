import eastereggs from './eastereggs';
import errorMessages from './errorMessages';
import labels from './labels';
import operationEvents from './operationEvents';
import eventsLabels from './eventsLabels';
import baseData from './baseData';
import eventsDetails from './eventsDetails';
import positions from './positions';
import eventEnums from './eventEnums';
import shipmentTracking from './shipmentTracking';
import specialCases from './specialCases';
import dates from './dates';

export default {
  ...operationEvents,
  ...eastereggs,
  ...errorMessages,
  ...labels,
  ...eventsLabels,
  ...baseData,
  ...eventsDetails,
  ...positions,
  ...eventEnums,
  ...shipmentTracking,
  ...specialCases,
  ...dates,

  FEEDBACK: 'Feedback',
  FEEDBACK_HINT: 'Here you can give us simple feedback on the new process information',
};
