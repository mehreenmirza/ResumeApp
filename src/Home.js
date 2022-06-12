import './Home.css'
import Title from './Title'
import Info from './Info'
import React from 'react'
import Education from './Education'
import Projects from './Projects'

function Home() {
  return (
      
    <div className='home'>
        < Title/>
        < Info/>
        < Education/>
        < Projects/>
    </div>
  )
}

export default Home