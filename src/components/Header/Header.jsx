import { getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import './header.scss'

export const Header = () => {
    const [user, setUser] = useState();
    const auth = getAuth();
    
    const getUser = () => {
        setUser(auth.currentUser.email)
    }
    useEffect(() => {
        
    }, [])
    return (
        <div className="header__container">
            <div className='left__container'>
                <button>add</button>
                <button>edit</button>
            </div>
            <div className='rigth__container'>
            {auth.currentUser && <><img className='avatar' src={auth.currentUser.photoURL} alt="avatar"/>
            <span>{auth.currentUser.displayName}</span></>}
            
                
                
            </div>
        </div>
    )
}
