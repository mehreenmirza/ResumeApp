import './Projects.css'
import React from 'react'
import Works from './Works'
import {Button} from '@mui/material'

function Projects() {
  return (
    <div className='projects'> 
        <h1> Works </h1>
        <div className='projects__cards1'> 
            <Works
                src=""
                title="DivHacks 2021 Hackathon Project"
                description="C# Winform Application for tracking patient and vaccine information."
            />
            <Works 
                src=""
                title="Sentiment Analysis Research Project"
                description="Analyzed the effect of Tweet sentiments on Cyrpto currency price fluctuations. Used Python, Pandas, Plotly, and Twitter API. "
            />
            <Works 
                src=""
                title="Venue Booking Application"
                description="Full stack application using React Js, Express Js, and MongoDB."
            />
        </div>
    </div>
  )
}

export default Projects