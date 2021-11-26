// Import React
import { useState } from "react";

// Import Style
import './Register.css'
import { Button, Modal, Form, Alert } from "react-bootstrap";

// Import API
import { API } from '../../config/api'

export default function Register() {

    const [show, setShow] = useState({
        login: false,
        register: false,
    });

    const handleClose = () => {
        setShow({ login: false, register: false });
    };

    const handleShowLogin = () => {
        setShow((prevState) => ({ ...prevState, login: true }));
    };

    const handleShowRegister = () => {
        setShow((prevState) => ({ ...prevState, register: true }));
    };

    const handleSwitch = () => {
        if (show.login) {
            setShow({ login: false, register: true });
        } else {
            setShow({ login: true, register: false });
        }
    };

    const [formRegister, setFormRegister] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        phone: "",
        address: "",
    })

    const { name, email, password, gender, phone, address } = formRegister;

    const registerHandleChange = (e) => {
        setFormRegister({
            ...formRegister,
            [e.target.name]: e.target.value,
        })
    }

    const registerHandleSubmit = async (e) => {
        try {
            e.preventDefault();

            const config = {
                headers: {
                    "Content-Type": "application/json",
                }
            }

            const body = JSON.stringify(formRegister)
            const response = await API.post("/register", body, config)
            console.log(response.status);

            if (response?.status == 200) {
                const alert = (
                    <Alert variant="success">
                        <Alert.Heading>Register Success</Alert.Heading>
                    </Alert>
                )
                setFormRegister({
                    name: "",
                    email: "",
                    password: "",
                    gender: "",
                    phone: "",
                    address: "",
                });
                setShow(false);
            } else {
                const alert = (
                    <Alert variant="danger">
                        <Alert.Heading>Register Failed</Alert.Heading>
                    </Alert>
                )
                setShow(false);
            }
        } catch (error) {
            const alert = (
                < Alert variant="danger" className="py-1" >
                    Failed
                </Alert >
            );
            console.log(error);
        }
    }

    return (
        <>
            <Modal show={show.register} handleClose={handleClose} handleSwitch={handleSwitch} className='bodyModal'>
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={handleClose}
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
                                Already have an account ?  Klik {handleShowLogin}
                                <a href='/' className='link' onClick={handleShowLogin}>Here</a>
                            </small>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
            <span>
                <button
                    className="btnRegister"
                    onClick={handleShowRegister}
                    href="#services">
                    Register
                </button>
            </span>
        </>
    )
}