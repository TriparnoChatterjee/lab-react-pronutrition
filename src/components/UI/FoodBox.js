import { useContext, useState } from "react";
import TrackContext from "../../store/track-context";
import classes from "./FoodBox.module.css";
const FoodBox = (props) => {
  const[amount ,updateAmount]= useState(1);
  const updateAmountHandler =(event)=>{
    updateAmount(event.target.value)
  }
  const trackCtx = useContext(TrackContext);
  const addToTrackHandler = ()=>{
    trackCtx.addItem({
        id:props.id,
        name:props.name,
        cal:props.cal,
        noOf:amount
    });
  }
  return (
    <div className={classes["food-box"]}>
      <img alt="" src={props.img}></img>
      <div className={classes["food-details"]}>
        <p>{props.name}</p>
        <p>{props.cal}</p>
      </div>
      <div>
        <input value={amount} onChange={updateAmountHandler}></input>
        <button onClick={addToTrackHandler}>+</button>
      </div>
    </div>
  );
};
export default FoodBox;
