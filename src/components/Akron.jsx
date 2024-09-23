import pattern from "../assets/images/pattern.png";
import logo from "../assets/images/akron-logo.png"

export function Akron () {
  return (
    <div id="akron-token" className='akron'>
      <div className='akron-pattern'>
        <img src={pattern} alt="" />
        <img src={pattern} alt="" />
      </div>
      <div className="container akron-container">
        <div className="akron-logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  )
}