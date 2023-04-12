
import { useState } from "react";
import { useEffect } from "react";
import { Howl } from "howler";
import ButtonLayout from "./ButtonLayout";
import PomodoroTimer from "./PomodoroTimer";
import pomodoroBell from "../audio/bell.wav"; 
import pomodoroBreak from "../audio/break.wav"; 
import click from "../audio/click.wav"; 
import PomodoroMode from "./PomodoroMode";

const POMODORO_TIME = 1500000;
const BREAK_TIME = 450000; 

const playClickSound = () => {
  const clickSound = new Howl({
    src: click
  })

  clickSound.play();
}

function Pomodoro() {

  const [time, setTime] = useState(POMODORO_TIME);
  const [enableTimer, setEnableTimer] = useState(false);
  const [pomodoroMode, setPomodoroMode] = useState(false);   
  

  useEffect(() => {
    let interval = null; 
    
    const pomodoroAlarm = new Howl({
      src: pomodoroBell
    })
    
    const pomodoroBreakAlarm = new Howl({
      src: pomodoroBreak
    })

    const playPomodoroAlarm = () => {
      pomodoroAlarm.play(); 
    }
  
    const playBreakAlarm = () => {
      pomodoroBreakAlarm.play();
    }
  
    const setPomodoroConfig = () => {
      playPomodoroAlarm();
      setEnableTimer(false); 
      setTime(POMODORO_TIME); 
      setPomodoroMode(false);
    }
  
    const setBreakConfig = () => {
      playBreakAlarm();
      setEnableTimer(false); 
      setTime(BREAK_TIME); 
      setPomodoroMode(true);
    }

    if(time === 0 && pomodoroMode) {
      setPomodoroConfig();
      return () => clearInterval(interval); 
    } else if (time === 0 && !pomodoroMode) {
      setBreakConfig();
      return () => clearInterval(interval); 
    }

    if(enableTimer) {
      interval = setInterval(() => {
        setTime(prev => prev -= 10)
      }, 10)
    } else {
      clearInterval(interval); 
    }

    return () => clearInterval(interval); 
  }, [enableTimer, time, pomodoroMode])

  return (
    <main className="pomodoro">
      <div className="pomodoro__container">
        <PomodoroMode
          pomodoroMode={pomodoroMode} />

        <PomodoroTimer
          time={time} />
        
        <ButtonLayout
          setTimer={setEnableTimer}
          setTime={setTime}
          clickSound={playClickSound} />
      </div>
    </main>
  )
}

export default Pomodoro; 