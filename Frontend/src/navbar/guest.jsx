import "bootstrap/dist/css/bootstrap.min.css"
import {Routes, Route, Link} from 'react-router-dom'
import Home from '../Components/home'
import Login from '../Components/login'
import Register from '../Components/register'
import WebinerForm from '../Components/webinerform'

function Guest() {
  return (
      <div>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
          <Link className="navbar-brand" to="#">
            IT Academy
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mg-lg-0">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
             
              <li className="nav-item">
                <Link className="nav-link" to="/webinerform">
                  Webiner Form 
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/webinerform" element={<WebinerForm/>}/>       
            </Routes>
        </div>
      </div>
  );
}

export default Guest;









