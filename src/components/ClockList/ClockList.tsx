import { useCallback, useEffect, useState } from 'react'
import { TClockData } from '../../types/types'
import './ClockList.css'


interface Props {
  clock: TClockData;
  onRemove: () => void;
}

export const ClockList = ({ clock, onRemove }  : Props) => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date())

  const updateTime = useCallback(() => {
    const offset = Number(clock.timezone);
    const timezoneOffset = offset * 60 * 60 * 1000;
    const newTime = new Date(Date.now() + timezoneOffset);
    setCurrentTime(newTime);
  }, [Number(clock.timezone)])

  useEffect(() => {
    const timer = setInterval(() => {
      updateTime()
    }, 1000);
    return () => {
      clearInterval(timer);
    }
  }, [updateTime])

  useEffect(() => {
    updateTime();
  }, [clock.timezone, updateTime])

  const hh = currentTime.getHours();
  const mm = currentTime.getMinutes();
  const ss = currentTime.getSeconds();

  return (
    <div className='clock-container'>
      <button className="remove-button" onClick={onRemove}>
          &#10005;
      </button>
      <h3 className='clock-name'>{clock.name}</h3>
      <div className='clock-tabel'>
        <div className='clock-hour'>{hh}:</div>
        <div className='clock-minute'>{mm}:</div>
        <div className='clock-second'>{ss}</div>
      </div>
    </div>
  )
}
