// @flow

import { DateTime } from 'luxon';
const dateFormat: any = { year:'numeric', month: 'long', locale: 'en-us' };

export default {

  makeDateLabel: ({ startDate }: { startDate: string }) => 
    `${DateTime.fromISO(startDate).toLocaleString(dateFormat)}`,

  makeRangeLabel: ({ startDate, endDate }: { startDate: string, endDate: string }) => {
    const formattedEndDate = endDate ? 
      DateTime.fromISO(endDate).toLocaleString(dateFormat) : 'Present';
  
    return `${DateTime.fromISO(startDate).toLocaleString(dateFormat)} - ${formattedEndDate}`    
  }  
  
}