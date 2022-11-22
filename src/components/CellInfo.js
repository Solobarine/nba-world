import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CellInfo = () => {
  const carrier = 'VIA';
  const date = () => {
    const now = new Date()
    console.log(now)
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    return `${hours}:${minutes}:${seconds}`
  }
  const [time, setTime] = useState('00:00:00');
  setInterval(setTime(date()))
  return(
    <section className="cell-info">
      <FontAwesomeIcon icon="fa-solid fa-ellipsis" />
      <p className="carrier">{carrier}</p>
      <FontAwesomeIcon icon="fa-solid fa-wifi" />
      <p className="date">{time}</p>
      <FontAwesomeIcon icon="fa-brands fa-bluetooth" />
      <FontAwesomeIcon icon="fa-solid fa-battery-full" />
    </section>
  )
};

export default CellInfo;
