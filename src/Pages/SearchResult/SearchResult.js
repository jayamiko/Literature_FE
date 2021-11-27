// Import Style
import './SearchResult.css';

// Import Components
import Navbar from '../../Components/Navbar/Navbar';
import InputSearch from '../../Components/InputSearch/InputSearch';

export default function SearchResult() {
    return (
        <>
            <Navbar />

            <div
                style={{
                    position: 'relative',
                    right: '350px'
                }}>
                <InputSearch />
            </div>

            <div className='box-search-result'>
                <div className='box-anytime'>

                </div>
                <div className='box-result'>

                </div>
            </div>
        </>
    )
}