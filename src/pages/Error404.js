import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';

export default function Error404() {
  return (
    <div className='max-w-4xl mx-auto '  >
        <Link to='/'>
            <img  src="https://cdn.dribbble.com/users/195330/screenshots/1545094/attachments/235536/21_404-error.png" alt="Error Page"/>
        </Link>
    </div>
  )
}
