import "./fixture.scss";

function Fixture({ fixture, dateAndHour }) {
  return (
    <div className="fixture-container">
      <div className="fixture">
        <div className="club">
          <img
            className="club-crest"
            src={fixture.clubs.home.logo}
            alt={fixture.clubs.home.name}
          ></img>
          <h3 className="club-name">{fixture.clubs.home.name}</h3>
        </div>
        <div className="fixture-info">
          {fixture.score.winner ? (
            <div className="score">
              <p>{`${fixture.score.home} - ${fixture.score.away}`}</p>
              <p className="league-name">{fixture.league.name}</p>
            </div>
          ) : (
            <div className="date-hour">
              <p>{dateAndHour.formattedDate}</p>
              <p>{dateAndHour.formattedHour}</p>
              <p className="league-name">{fixture.league.name}</p>
            </div>
          )}
        </div>
        <div className="club">
          <img
            className="club-crest"
            src={fixture.clubs.away.logo}
            alt={fixture.clubs.away.name}
          ></img>
          <h3 className="club-name">{fixture.clubs.away.name}</h3>
        </div>
      </div>
    </div>
  );
}

export default Fixture;
