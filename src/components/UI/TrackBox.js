import { useContext } from 'react';
import TrackContext from '../../store/track-context';
import classes from './TrackBox.module.css';
const TrackBox = (props) => {
    const trackCtx = useContext(TrackContext);
    const removeItemHandler = ()=>{
        trackCtx.removeItem(props.id);
    }
  return (
    <div className={classes['track-box']}>
      <div>
        {props.amount} X {props.foodName} = {props.calForEach}
      </div>
      <button onClick={removeItemHandler} >X</button>
    </div>
  );
};
export default TrackBox;
