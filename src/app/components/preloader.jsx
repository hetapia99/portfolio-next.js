"use client"
import Link from 'next/link'
import React, {useEffect} from 'react'
import { preLoaderAnim } from '../../animations/index.js';
import './preloader.css'

const Preloader = () => {
    useEffect(() => {
        preLoaderAnim()
    }, []);
    
  return (
    <div className="preloader">
        <div className="texts-container">
            <span>Designer, &nbsp; </span>
            <span>Developer, &nbsp;</span>
            <span> Creative {"👨‍💻"} </span>

        </div>
    </div>
  )
}

export default Preloader