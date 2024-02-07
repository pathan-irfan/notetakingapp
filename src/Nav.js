import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg  bg-secondary p-3 " >
  <div class="container-fluid">
    <Link class="navbar-brand  text-light link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="/" >Note Taking App</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active text-light mx p-8 link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-light link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="saved">Saved Data</Link>
        </li>
      
        <li class="nav-item dropdown">
         </li>
       
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Nav
