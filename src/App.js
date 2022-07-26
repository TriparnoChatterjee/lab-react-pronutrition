import Header from "./components/Layout/Header";
import Nutrition from "./components/Nutrition/Nutrition";
import TrackProvider from "./store/TrackProvider";

function App() {
  return (
    <TrackProvider>
      <div className="App">
        <div>
          <Header></Header>
          <Nutrition></Nutrition>
        </div>
      </div>
    </TrackProvider>
  );
}

export default App;
