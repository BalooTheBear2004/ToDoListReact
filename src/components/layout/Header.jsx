//rafc
import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='header'>
        <nav className='nav'>
            <ul className='links-wrapper'>
                <li>
                    <Link className='link' to="/">𓂀Home𓃤</Link>
                </li>
                <li>
                    <Link className='link' to="/tasks">𓂀Tasks𓃤</Link>
                </li>
                <li>
                    <Link className='link' to="/about">𓂀About𓃤</Link>
                </li>
            </ul>
        </nav>
    </header>

  )
}
