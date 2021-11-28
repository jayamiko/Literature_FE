// Import Style
import searchIcon from '../../Images/icon-search.png'
import { Button, Form } from "react-bootstrap";
// import './Search.css'

export default function InputSearch() {
    return (
        <>
            <Form onSubmit={""} className='formModal'>
                <Form.Group className="formGroup" controlId="formBasicEmail">
                    <Form.Control
                        onChange={""}
                        type="text"
                        name="search"
                        placeholder='Search for literature'
                        className='inputSearch'
                        required
                    />
                    <Button
                        className="searchButton"
                        variant="warning"
                        type="submit"
                        required>
                        <img src={searchIcon} alt='icon-search' />
                    </Button>
                </Form.Group>
            </Form>
        </>
    )
}