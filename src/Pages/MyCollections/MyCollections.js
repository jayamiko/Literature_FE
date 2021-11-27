// Import React
import React, { useContext } from "react";
import { AuthContext } from '../../Context/AuthContextProvider';

// import Style
import './MyCollections.css'

// Import Components
import Navbar from '../../Components/Navbar/Navbar';

// Import Pages
import MyLiterature from '../../Pages/Profile/myLiterature';

export default function MyCollections() {
    const { stateAuth } = useContext(AuthContext);
    return (
        <>
            <Navbar />

            <div className='container-mycollections'>
                <div>
                    <p className="title-mycollections">My Collections</p>
                </div>
                <div className='mycollections'>
                    <MyLiterature
                        stateAuth={stateAuth.user.id}
                    />
                </div>
            </div>
        </>
    )
}