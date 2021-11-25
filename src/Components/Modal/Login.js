// Import React
import { useState, useContext } from "react";

// Import Style
import { Button, Modal, Form, Alert } from "react-bootstrap";
import './Login.css'

export default function Login({ isOpen, setIsOpen }) {
    const [modal, setModal] = useState(false);
    const [registerModal, setRegisterModal] = useState(false);
    const [message, setMessage] = useState(null)

    const openModalLogin = () => {
        setModal(true);
        setRegisterModal(false);
    };

    const openModalRegister = () => {
        setModal(false);
        setRegisterModal(true);
    };

    const closeModalLogin = () => setModal(false);

    const [formLogin, setFormLogin] = useState({
        email: "",
        password: "",
    })

    const { email, password } = formLogin;

    const LoginHandleChange = (e) => {
        setFormLogin({
            ...formLogin,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <>
            <button onClick={openModalLogin} className="btnLogin">
                Sign In
            </button>

            <Modal show={modal} className='bodyModalLogin'>
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={closeModalLogin}
                    required
                >x</button>
                <Modal.Body>
                    <h2 className="headerModal">Sign Up</h2>
                    <Form onSubmit={""} className='formModal'>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Control
                                onChange={LoginHandleChange}
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
                                onChange={LoginHandleChange}
                                type="password"
                                name="password"
                                placeholder='Password'
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
                                Sign In
                            </Button>
                            <small className="text-center">
                                Already have an account ?  Klik {""}
                                <a href='/' className='link' onClick={openModalRegister}>Here</a>
                            </small>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}