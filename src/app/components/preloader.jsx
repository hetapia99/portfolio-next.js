"use client"
import Link from 'next/link'
import React, {useEffect} from 'react'
import {preLoaderAnim} from '/Users/tapia/portfolio-nextjs/src/animations/index.jsx'
import './preloader.css'

const Preloader = () => {
    useEffect(() => {
        preLoaderAnim()
    }, []);
    
  return (
    <div className="preloader">
        <div className="texts-container">
            <span>Please excuse the mess, &nbsp; </span>
            <span>I am a work in progress.</span>
            <span> &#128517; </span>

        </div>
    </div>
  )
}

export default Preloader