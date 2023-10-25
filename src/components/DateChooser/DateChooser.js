import { ButtonGroup } from "@chakra-ui/react";
import { setDate } from "features/fixturesSlice";
import { useDispatch } from "react-redux";
import * as dateHelpers from "utils/dateHelpers";
import "./datechooser.scss";

var dates = dateHelpers.getNextDaysArray(10);

export default function DateChooser({ selectedDate }) {
  const dispatch = useDispatch();

  const handleClick = (date) => {
    dispatch(setDate({ date: date }));
    setDate(date);
  };

  return (
    <div className="datechooser-main-div">
      <ButtonGroup aria-label="dates-container" className="dates-container">
        {dates.map((date) =>
          date === selectedDate ? (
            <button
              key={date}
              onClick={() => handleClick(date)}
              className="date-btn selected"
            >
              {date.substring(0, date.length - 5)}
            </button>
          ) : (
            <button
              key={date}
              onClick={() => handleClick(date)}
              className="date-btn"
            >
              {date.substring(0, date.length - 5)}
            </button>
          )
        )}
      </ButtonGroup>
    </div>
  );
}

// return (
//   <div className="datechooser-main-div">
//     <ButtonGroup aria-label="dates-container" className="dates-container">
//       {dates.map((date) => {
//         return (
//           <button
//             key={date}
//             onClick={() => handleClick(date)}
//             className="date-btn"
//           >
//             {/* {date.substring(0, date.length - 5)} */}
//             {date === selectedDate ? date : "almej"}
//           </button>
//         );
//       })}
//     </ButtonGroup>
//   </div>
// );
