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
                <Link to="/profile" style={{ textDecoration: "none" }}>
                    <span>
                        <a className="fw-bold text-dark" href="/profile"
                            style={{ textDecoration: 'none', color: "white" }}>
                            Profile
                        </a>
                    </span>
                </Link>
                <Link to="/my-collections" style={{ textDecoration: "none" }}>
                    <span>
                        <a className="fw-bold text-dark" href="/my-collections"
                            style={{ textDecoration: 'none', color: "white" }}>
                            My Collections
                        </a>
                    </span>
                </Link>
                <Link to="/add-literature" style={{ textDecoration: "none" }}>
                    <span>
                        <a className="fw-bold text-dark" href="/add-literature"
                            style={{ textDecoration: 'none', color: "white" }}>
                            Add Literature
                        </a>
                    </span>
                </Link>
                <span onClick={logoutHandle}>
                    <a className="fw-bold text-dark" href="/"
                        style={{ textDecoration: 'none', color: "white" }}>
                        Logout
                    </a>
                </span>
            </div>
            <Link to='/home'>
                <div className='iconNavbar'>
                    <img src={Icon} alt='icon-literature' />
                </div>
            </Link>
        </div>
    )
}