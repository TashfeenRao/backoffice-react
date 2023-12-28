import "./CalendarGrid.css";

const App = () => {
  const renderGridHeaders = () => {
    const headers = [];
    for (let i = 1; i <= 12; i++) {
      headers.push(<div key={i} className='grid-header'>{`Court ${i}`}</div>);
    }
    return headers;
  };

  const renderTimeSlots = () => {
    const timeSlots = [];
    for (let hour = 0; hour < 24; hour++) {
      const cells = [];
      for (let court = 1; court <= 12; court++) {
        cells.push(
          <div key={`${court}-${hour}`} className='grid-cell'>
            {/* Representing half-hour intervals with a center border */}
            <div className='border-line'></div>
          </div>
        );
      }
      timeSlots.push(
        <div key={hour} className='grid-row'>
          {cells}
        </div>
      );
    }
    return timeSlots;
  };

  return (
    <div className='calendar-grid'>
      <div className='grid-headers'>{renderGridHeaders()}</div>
      <div className='grid-body'>{renderTimeSlots()}</div>
    </div>
  );
};

export default App;
