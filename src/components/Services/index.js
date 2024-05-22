import React from 'react'
// import './Services.css'

const Services = () => {
  return (
    <section
      id='services'
      className='services'
    >
      <h2>Our Services</h2>
      <div className='service-list'>
        <div className='service-item'>
          <img
            src='path/to/icon1.png'
            alt='Career Consulting'
          />
          <h3>Career Consulting</h3>
          <p>Description of Career Consulting</p>
        </div>
        <div className='service-item'>
          <img
            src='path/to/icon2.png'
            alt='Workshops'
          />
          <h3>Workshops</h3>
          <p>Description of Workshops</p>
        </div>
        <div className='service-item'>
          <img
            src='path/to/icon3.png'
            alt='Online Courses'
          />
          <h3>Online Courses</h3>
          <p>Description of Online Courses</p>
        </div>
        <div className='service-item'>
          <img
            src='path/to/icon4.png'
            alt='Mentorship'
          />
          <h3>Mentorship</h3>
          <p>Description of Mentorship</p>
        </div>
      </div>
    </section>
  )
}

export default Services
