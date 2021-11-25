// Import Style
import './SearchPage.css'
import IconLiterature from '../../Images/icon-lg.png'

// Import Component
import Navbar from '../../Components/Navbar/Navbar'
import InputSearch from '../../Components/InputSearch/InputSearch'

export default function SearchPage() {
    return (
        <>
            <div className='backgroundPrimary'>
                <Navbar />
                <div className='boxSearch'>
                    <img src={IconLiterature} alt="" />
                </div>
                <InputSearch />
            </div>
        </>
    )
}