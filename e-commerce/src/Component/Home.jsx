import React from 'react'
import Nav from './Nav'
const Home = () => {
  return (
  <React.Fragment>
      <Nav/>
      <div className='  md:text-center bg-gray-100 text-black'>
      <h4 className=''>Move,Shop,Customise & Celebrate With Us.
      </h4>
      <p className=''>
      No matter what you feel like doing today, It's better as a member .
      </p>
      <a className='underline'><span>Join Us.</span></a>
      </div>
    </React.Fragment>
  )
}

export default Home
