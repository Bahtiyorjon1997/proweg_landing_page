import React from 'react'
import './App.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Welcome to ProWeg</h1>
        <p>Your pathway to professional excellence</p>
      </header>
      <main>
        <section id='about'>
          <h2>About Us</h2>
          <p>
            ProWeg offers top-notch consulting and education services to help
            you achieve your professional goals.
          </p>
        </section>
        <section id='services'>
          <h2>Our Services</h2>
          <ul>
            <li>Consulting</li>
            <li>Workshops</li>
            <li>Online Courses</li>
            <li>Mentorship</li>
          </ul>
        </section>
        <section id='contact'>
          <h2>Contact Us</h2>
          <p>Email: info@proweg.com</p>
          <p>Phone: +49 123 456 789</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 ProWeg. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
