import React, { useContext } from 'react'
import { memo } from 'react'
import UserContext from '../context/UserContext';

function Navbar() {
  const {allUser,setAllUsers} = useContext(UserContext);
  function searchUser(e){
    e.preventDefault();
    const user = allUser.filter((value) => {
      return value.login === e.target.search.value;
    })
    setAllUsers(user);
    
  }
  return (
    <div>
        


<nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
{/*         
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      <form className="d-flex" role="search" onSubmit={searchUser}>
        <input className="form-control me-2" name="search" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
  </nav>
  


    </div>
  )
}

export default memo(Navbar);