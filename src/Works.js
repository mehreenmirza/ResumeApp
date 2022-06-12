import './Works.css'
import React from 'react'
import { Button } from '@mui/material'

function Works({src, title, description, button}) {
  return (
    <div className="works">
        <img src={src} alt=""/>
        <div className ="works__info">
            <h2>{title}</h2>
            <h3>{description}</h3>
        </div>
        
    </div>
  )
}

export default Works