import './Info.css'
import React from 'react'
import {Button} from '@mui/material';

function Info() {
  return (
    <div className='info'>
        <h1> About Me </h1>
        <div className='aboutMe'>
            
            <h5> Hi! My name is Mehreen. I'm currently a Computer Science student at the University of Virginia. I have 
                projects in Python, Java, JavaScript, and C++. I also have an interest in Cloud Development
                and have recently become an AWS certified Associate Developer. </h5>

        </div>

        <div className='contact'>
            <div className='adresses'>
                <h1> Contact Details </h1>
                <h2> Mehreen Mirza </h2>
                <h3> 12040 Paper Birch Ln </h3>
                <h4> Gainesville, VA 20155 </h4>
                <h5> +1 5712793159</h5>
                <h6> mmm4hna@virginia.edu </h6>
                
            </div>
            <div className='resume__button'>
                    <Button onClick={() => window.open("https://www.linkedin.com/in/mehreenmirza/")}
                    variant='outlined'>
                    Download Resume 
                    </Button>
            </div>
        </div>

        <div className='resume'>

        </div>
    </div>
  )
}

export default Info