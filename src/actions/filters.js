//Set Text Filter
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text: text
});

//Set sort by amount
export const setSortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

//Set sort by date
export const setSortByDate = () => ({
  type: 'SORT_BY_DATE'
});

//Set start date
export const setStartDate = (startDate) => ({
  type:'SET_START_DATE',
  startDate: startDate
});

//Set end date
export const setEndDate = (endDate) => ({
  type:'SET_END_DATE',
  endDate: endDate
});