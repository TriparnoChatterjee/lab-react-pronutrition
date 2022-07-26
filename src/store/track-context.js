import React from "react";

const TrackContext =  React.createContext({
    items:[],
    totalCalorie:0,
    addItem:()=>{},
    removeItem:(id)=>{}

});
export default TrackContext;