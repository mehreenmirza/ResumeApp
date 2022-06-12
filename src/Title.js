import React from 'react'
import './Title.css'
import './Education';
import { Button } from '@mui/material';
import TypeAnimation from 'react-type-animation';
import { height } from '@mui/system';

function Title() {
  return (
    <div className='title'>
        <div style={{ width: '50em' },{height:'21em'}} className='title__name'>
            <TypeAnimation
            cursor={false}
            sequence={["Hi, I'm Mehreen Mirza.", 4500, '']}
            wrapper="h2"
            repeat={Infinity}
            />
        </div>
        
        <div className='title__info' >
            <div className='title__buttons'>
                <div className='title__linkedin'>
                    <Button img src="https://www.citypng.com/public/uploads/preview/hd-white-square-outline-linkedin-in-icon-symbol-png-31623972553hxk4l9ziuw.png" alt="my image"
                    onClick={() => window.open("https://www.linkedin.com/in/mehreenmirza/")}
                    variant='outlined'>
                    LinkedIn
                    </Button>
                    
                </div>
                <div className='title__github'>
                   <Button onClick={() => window.open("https://github.com/mehreenmirza")}
                    variant='outlined'>
                    Github
                    </Button> 
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Title 