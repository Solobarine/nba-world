import PropTypes from 'prop-types';

const Teams = (props) => {
  const teams = props.teams;
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

Teams.propTypes = {
  props: PropTypes.object.isRequired,
}

export default Teams;
