// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div>
    <nav className="nav">
      <div className="nav">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="img"
        />
        <h1 className="wave-title">Wave</h1>
      </div>

      <ul className="ul">
        <li>
          <Link to="/" className="home">
            <h1>Home</h1>
          </Link>
        </li>
        <li>
          <Link to="/about" className="home">
            <h1>About</h1>
          </Link>
        </li>
        <li>
          <Link to="/contact" className="home">
            <h1>Contact</h1>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default Header
