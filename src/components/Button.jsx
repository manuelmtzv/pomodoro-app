
function Button({ textContent, setTimer, setTime, clickSound }) {

  if(textContent === "Start" || textContent === "Break") {
    return (
      <button className="button-layout__button button-layout__button--start" onClick={() => {setTimer(true); clickSound()}}>
        {textContent}
      </button>
    )
  } else if(textContent === "Pause") {
    return (
      <button className="button-layout__button button-layout__button--pause" onClick={() => {setTimer(false); clickSound()}}>
        {textContent}
      </button>
    )
  } else {
    return (
      <button className="button-layout__button button-layout__button--reset" onClick={() => {setTime(1500000); clickSound()}}>
        {textContent}
      </button>
    )
  }
}

export default Button; 