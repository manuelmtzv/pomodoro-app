
function PomodoroMode ({ pomodoroMode }) {
  return (
    <div className="pomodoro-mode">
      <h2 className="pomodoro-mode__title">{`${!pomodoroMode ? "Pomodoro" : "Break"}`}</h2>
    </div>
  )
}

export default PomodoroMode; 