import logo from "../img/logo.png"

function Brand({ name }) {
  return (
    <div className="brand">
      <img className="brand__logo" src={logo} alt="Pomodoro-816 app" />

      <h1 className="brand__name">
        {name}
      </h1>
    </div>
  )
}

export default Brand; 