import {useState} from "react";

const CellInfo = () => {
  const carrier = 'VIA';
  const [time, setTime] = useState('00:00:00');
  return(
    <section className="cell-info">
      <i className="fa-solid fa-ellipsis"></i>
      <p className="carrier">{carrier}</p>
      <i className="fa-solid fa-wifi"></i>
      <p className="date">{time}</p>
      <i className="fa-brands fa-bluetooth"></i>
      <i className="fa-solid fa-battery-full"></i>
    </section>
  )
};

export default CellInfo;
