import ReactDOM from "react-dom";
import "./App.css";
import { Clock } from "./components/clock";
import { Timer } from "./components/timer";

const TimerApp = () => {
  return (
    <div>
      <Clock />
      <Timer />
    </div>
  );
};

ReactDOM.render(<TimerApp />, document.getElementById("app"));
