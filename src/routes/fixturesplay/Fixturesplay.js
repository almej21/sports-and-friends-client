import DateChooser from "components/DateChooser/DateChooser";
import Fixture from "components/Fixture/Fixture";
import LeaguesChooser from "components/LeaguesChooser/LeaguesChooser";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as dateHelpers from "utils/dateHelpers";
import * as ServerApi from "utils/serverApi";
import "./fixturesplay.scss";

const Fixturesplay = (props) => {
  const [fixtures, setFixtures] = useState([]);
  const dateGlobalState = useSelector((state) => state.fixtures.value.date);
  const selectedLeaguesGlobalState = useSelector(
    (state) => state.fixtures.value.country_leagues
  );
  var filteredFixturesDateSelected = [];
  var selectedDate = dateGlobalState.date;
  if (!selectedDate) {
    selectedDate = dateHelpers.getFormattedDate();
  }

  useEffect(() => {
    ServerApi.allfixtures()
      .then((res) => {
        setFixtures(res.data);
      })
      .catch((err) => {
        console.log("Server ERROR");
      });
  }, []);

  console.log("selected date:", selectedDate);
  filteredFixturesDateSelected = fixtures.filter((fixture) => {
    return (
      fixture.date === selectedDate &&
      selectedLeaguesGlobalState.includes(fixture.league.country)
    );
  });
  // console.log(fixtures);
  // console.log(filteredFixturesDateSelected);

  return (
    <div className="fixturesplay-page">
      <DateChooser selectedDate={selectedDate}></DateChooser>
      <LeaguesChooser></LeaguesChooser>
      <div className="fixtures-table">
        <div className="fixtures">
          {filteredFixturesDateSelected.length === 0 && (
            <h1 className="no-fixtures-title">{`no fixtures on ${selectedDate}`}</h1>
          )}

          {filteredFixturesDateSelected.map((fixture) => {
            const dateAndHour = dateHelpers.convertTimestamp(fixture.timestamp);
            return <Fixture fixture={fixture} dateAndHour={dateAndHour} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Fixturesplay;
