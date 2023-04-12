
function Navbar(props) {

  return (
    <nav className="navbar">
      {
        props.links.map((link, index) => {
          return (
            <a className="navbar__link" href={link.link} key={index}>{link.name}</a>
          )
        }) 
      }
    </nav>
  )
}

export default Navbar;