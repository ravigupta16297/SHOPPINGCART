import React from 'react'
import { CartPlus } from 'bootstrap-icons-react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const val = useSelector((state) => state.addremove)
  const users = useSelector((state) => state.user)

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" style={{ color: 'white' }}>Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {users.length > 0 &&
                <li className="nav-item">
                  <Link to="/logout" className="nav-link active" aria-current="page" style={{ color: 'white' }} >Logout</Link>
                </li>}

              {!users.length > 0 && <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" style={{ color: 'white' }}>Login</Link>
              </li>}

              {users.length > 0 && <li className="nav-item">
                <Link to="/home" className="nav-link active" aria-current="page" style={{ color: 'white' }}>Home</Link>
              </li>}
              {users.length > 0 && <li className="nav-item">
                <Link className="nav-link" to="/cart" style={{ color: 'white' }}>Cart</Link>
              </li>}
            </ul>
            {users.length > 0 && <span className='mb-2' style={{ fontSize: '1.5rem', color: 'white', listStyleType: 'none' }}>
              <Link to="/cart"> <CartPlus /></Link><span>{val.length}</span>
            </span>}
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar