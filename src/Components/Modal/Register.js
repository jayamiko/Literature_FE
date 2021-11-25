// Import React
import { useState } from "react";

// Import Style
import './Register.css'
import { Button, Modal, Form, Alert } from "react-bootstrap";

export default function Register() {

    const [modal, setModal] = useState(false);
    const [registerModal, setRegisterModal] = useState(false);
    const [message, setMessage] = useState(null)
    const [formRegister, setFormRegister] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
    })

    const openModalLogin = () => {
        setModal(true);
        setRegisterModal(false);
    };
    const openModalRegister = () => {
        setRegisterModal(true);
        setModal(false);
    };
    const closeModalLogin = () => setModal(false);
    const closeModalRegister = () => setRegisterModal(false);

    const { name, email, password, phone, address } = formRegister;

    const registerHandleChange = (e) => {
        setFormRegister({
            ...formRegister,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <>
            <Modal show={registerModal} className='bodyModal'>
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={closeModalRegister}
                    required
                >x</button>
                <Modal.Body>
                    <h2 className="headerModal">Sign Up</h2>
                    <Form onSubmit={""} className='formModal'>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Control
                                onChange={registerHandleChange}
                                type="email"
                                name="email"
                                placeholder='Email'
                                className='inputModal'
                                required
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-4"
                            controlId="formBasicPassword"
                        >
                            <Form.Control
                                onChange={registerHandleChange}
                                type="password"
                                name="password"
                                placeholder='Password'
                                className='inputModal'
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicName">
                            <Form.Control
                                name="name"
                                onChange={registerHandleChange}
                                type="text"
                                placeholder='Full Name'
                                className='inputModal'
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicName" placeholder='Gender'>
                            <Form.Select aria-label="Default select example" className='inputModal'>
                                <option value="male" className='gender'>Male</option>
                                <option value="female" className='gender'>Female</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicPhone">
                            <Form.Control
                                onChange={registerHandleChange}
                                name="phone"
                                type="text"
                                placeholder='Phone'
                                className='inputModal'
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicPhone">
                            <Form.Control
                                onChange={registerHandleChange}
                                name="address"
                                type="text"
                                placeholder='Address'
                                className='inputModal'
                                required
                            />
                        </Form.Group>
                        <div class="formModal">
                            <Button
                                className="submitRegister"
                                variant="warning"
                                type="submit"
                                required>
                                Sign Up
                            </Button>
                            <small className="text-center">
                                Already have an account ?  Klik {openModalLogin}
                                <a href='/' className='link' onClick={openModalLogin}>Here</a>
                            </small>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
            <span>
                <button
                    className="btnRegister"
                    onClick={openModalRegister}
                    href="#services">
                    Register
                </button>
            </span>
        </>
    )
}