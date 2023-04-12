
import { useState } from "react";
import Button from "./Button";

function ButtonLayout( props ) {

  const [buttonText] = useState("Start");

  return (
    <div className="button-layout">
      <Button
        textContent={buttonText}
        setTimer={props.setTimer}
        clickSound={props.clickSound} />
      <Button
        textContent={"Pause"}
        setTimer={props.setTimer}
        clickSound={props.clickSound} />
      <Button
        textContent={"Reset"}
        setTimer={props.setTimer}
        setTime={props.setTime}
        clickSound={props.clickSound} />
    </div>
  )
}

export default ButtonLayout; 