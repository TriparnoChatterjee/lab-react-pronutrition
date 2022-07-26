import { useReducer } from "react";
import TrackContext from "./track-context";

const defaultTrackState = {
  items: [],
  totalCalorie: 0,
};

const trackReducer = (state, action) => {
  if (action.type === "ADD") {
    // console.log("HEy Working !");

    // console.log(action.item);
    var updatedItems;
    const findIndex = state.items.findIndex((a) => a.id === action.item.id);
    // findIndex !== -1 && state.items.splice(findIndex, 1);
    if (findIndex !== -1) {
      const existingCartItem = state.items[findIndex];
      const updatedItem = {
        ...existingCartItem,
        noOf: existingCartItem.noOf + action.item.noOf,
      };
      updatedItems = [...state.items];
      updatedItems[findIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    var ut = 0;
    for (const it of updatedItems) {
      ut = ut + it["noOf"] * it["cal"];
    }
    // console.log(ut);

    const updatedTotalAmount = ut;
    console.log(updatedTotalAmount);
    return {
      items: updatedItems,
      totalCalorie: updatedTotalAmount,
    };
  }
    if (action.type === "REMOVE") {
      // const existingCartItemIndex = state.items.findIndex(
      //   (item) => item.id === action.item.id
      // );
   
      const existingCartItemIndex = state.items.findIndex((a) => a.id === action.item);
      const existingItem = state.items[existingCartItemIndex];

      const updatedTotalAmount = state.totalCalorie - +(existingItem.noOf)*existingItem.cal;

      // let updatedItems;
      // if (existingItem.amount === 1) {

       updatedItems = state.items.filter((item) => item.id !== action.item);

      // } else {

      //   const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      //   updatedItems = [...state.items];
      //   updatedItems[existingCartItemIndex] = updatedItem;
      // }
      return {
        items: updatedItems,
        totalCalorie: updatedTotalAmount,
      };
    }
  return defaultTrackState;
};
const TrackProvider = (props) => {
  const [trackState, dispatchTrackAction] = useReducer(
    trackReducer,
    defaultTrackState
  );

  const addItemToTrackHandler = (item) => {
    dispatchTrackAction({
      type: "ADD",
      item: item,
    });
  };
  const removeItemFromTrackHandler = (id) => {
    dispatchTrackAction({
      type: "REMOVE",
      item: id,
    });
  };
  const cartContext = {
    items: trackState.items,
    totalCalorie: trackState.totalCalorie,
    addItem: addItemToTrackHandler,
    removeItem: removeItemFromTrackHandler,
  };
  return (
    <TrackContext.Provider value={cartContext}>
      {props.children}
    </TrackContext.Provider>
  );
};
export default TrackProvider;
