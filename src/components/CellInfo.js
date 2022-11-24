import { useState } from 'react';

const CellInfo = () => {
  const carrier = 'VIA';
  const [time] = useState('00:00:00');

  return (
    <section className="cell-info">
      <div className="network">
        <i className="fa-solid fa-ellipsis" />
        <p className="carrier">{carrier}</p>
        <i className="fa-solid fa-wifi" />
      </div>
      <p className="date">{time}</p>
      <div className="icons">
        <i className="fa-brands fa-bluetooth" />
        <i className="fa-solid fa-battery-full" />
      </div>
    </section>
  );
};

export default CellInfo;
