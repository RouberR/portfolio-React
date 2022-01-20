import { getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../fb';
import './header.scss'

export const Header = () => {
    const [user, setUser] = useState();
    const currentUser = useAuth();
    useEffect(() => {
        
    }, [])
    return (
        <div className="header__container">
            <div className='left__container'>
                <button>add</button>
                <button>edit</button>
            </div>
            <div className='rigth__container'>
            {currentUser && <><img className='avatar' src={currentUser.photoURL} alt="avatar"/>
            <span>{currentUser.displayName}</span></>}
            
                
                
            </div>
        </div>
    )
}
