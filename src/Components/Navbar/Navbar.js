// Import Style
import './Navbar.css'
import Icon from '../../Images/icon-sm.png'



export default function Navbar() {
    return (
        <div className="navbar">
            <div className="menu">
                <span>Profile</span>
                <span>My Collections</span>
                <span>Add Literature</span>
                <span>Logout</span>
            </div>
            <div className='iconNavbar'>
                <img src={Icon} alt='icon-literature' />
            </div>
        </div>
    )
}