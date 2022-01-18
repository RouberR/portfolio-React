import React from 'react'
import './header.scss'
export const Header = () => {
    return (
        <div className="header__container">
            <div className='left__container'>
                <button>add</button>
                <button>edit</button>
            </div>
            <div className='rigth__container'>
                <span>Username</span>
                
            </div>
        </div>
    )
}
