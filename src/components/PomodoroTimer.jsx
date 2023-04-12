
import Timer from "./Timer";

function PomodoroTimer({ time }) {

  return (
    <div className="pomodoro__timer">
      <Timer
        time={time} />
    </div>
  )
}

export default PomodoroTimer;