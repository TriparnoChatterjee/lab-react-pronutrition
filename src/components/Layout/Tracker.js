import { useContext } from "react";
import TrackContext from "../../store/track-context";
import TrackBox from "../UI/TrackBox";

const Tracker = (props) => {
  const trackCtx = useContext(TrackContext);
  const selectedMeals = trackCtx.items.map((meal) => {
    return (
      <TrackBox
        id={meal.id}
        key={meal.id}
        amount={meal.noOf}
        foodName={meal.name}
        calForEach={meal.noOf * meal.cal}
      ></TrackBox>
    );
  });
  return (
    <div>
      <p>Todays Food : {trackCtx.totalCalorie} </p>
      <div>{selectedMeals}</div>
    </div>
  );
};

export default Tracker;
