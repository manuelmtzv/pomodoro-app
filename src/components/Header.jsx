
import Brand from "./Brand"
import Navbar from "./Navbar"

function Header() {

  const name = "Pomodoro 816"

  const links = [
    {
      name: "Home", 
      link: "#"
    }, 
    {
      name: "About me", 
      link: "#"
    }
  ]

  return (
    <header className="header">
      <div className="header__container">
        <Brand 
        name={name} />

        <Navbar
          links={links} />
      </div>
    </header>
  )
}

export default Header; 