// Import React
import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from '../../Context/AuthContextProvider'
import { useHistory } from "react-router-dom";

// Import Style
import './Navbar.css'
import Icon from '../../Images/icon-sm.png'



export default function Navbar() {

    let history = useHistory();
    const { stateAuth, dispatch } = useContext(AuthContext);

    const logoutHandle = (e) => {
        e.preventDefault();
        dispatch({
            type: "LOGOUT",
            isLogin: false,
            user: {
                email: "",
                password: "",
            },
        });
        history.push('/')
    };

    return (
        <div className="navbar">
            <div className="menu">
                <span>Profile</span>
                <span>My Collections</span>
                <span>Add Literature</span>
                <span onClick={logoutHandle}>
                    <a className="fw-bold text-dark"
                        href="/"
                        style={{ textDecoration: 'none', color: "white" }}
                    >
                        Logout
                    </a>
                </span>
            </div>
            <div className='iconNavbar'>
                <img src={Icon} alt='icon-literature' />
            </div>
        </div>
    )
}