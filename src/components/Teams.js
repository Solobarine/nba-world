const Teams = (props) => {
  const teams = props.teams; // eslint-disable-line
  return (
    <div className="teams">
      {teams.map((team) => (
        <div key={team.id} className="team">
          <p className="fullname">{team.full_name}</p>
          <p className="city">{team.city}</p>
          <p className="conference">{team.conference}</p>
        </div>
      ))}
    </div>
  );
};

export default Teams;
