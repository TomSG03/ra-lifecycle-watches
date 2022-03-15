import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import moment from "moment";

function Clock({ time, onDelete }) {
  const [timeZone, setTime] = useState('');

  function loadTime() {
    setTime(moment().utcOffset(Number(time.timeZone)).format("hh:mm:ss"));
  };

  useEffect(() => {
    loadTime();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const timeout = setTimeout(loadTime, 1000);

    return () => {
      clearTimeout(timeout);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeZone]);

  return (
    <div>
      <p>{time.name}</p>
      <div className='clock'>
        <p>{timeZone}</p>
        <button className='btn-del' data-id={time.id} onClick={onDelete}>✘</button>
      </div>
    </div>
  )
}

Clock.propTypes = {
  time: PropTypes.object,
  onDelete: PropTypes.func
}

export default Clock
