import React from 'react'
// import styles from './styles.scss'

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>ProWeg</div>
      <nav className='nav'>
        <ul>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#services'>Services</a>
          </li>
          <li>
            <a href='#courses'>Courses</a>
          </li>
          <li>
            <a href='#blog'>Blog</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
