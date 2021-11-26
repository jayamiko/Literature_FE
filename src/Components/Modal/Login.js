// Import React
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

// Import Components
import { AuthContext } from "../../Context/AuthContextProvider";

// Import Style
import { Button, Modal, Form } from "react-bootstrap";
import './Login.css'

// Import API
import { API, setAuthToken } from '../../config/api'

export default function Login() {

    const [modal, setModal] = useState(false);
    const [registerModal, setRegisterModal] = useState(false);

    const { stateAuth, dispatch } = useContext(AuthContext);
    const [message, setMessage] = useState(null)
    let history = useHistory();

    const checkAuth = () => {
        if (stateAuth.isLogin === true) {
            history.push("/home");
        }
    };
    checkAuth();

    const openModalLogin = () => {
        setModal(true);
        setRegisterModal(false);
    };
    const openModalRegister = () => {
        setRegisterModal(true);
        setModal(false);
    };
    const closeModalLogin = () => setModal(false);

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    };

    const submitLogin = async (e) => {
        e.preventDefault();

        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };

            const body = JSON.stringify(form);

            const response = await API.post("/login", body, config);
            console.log(response);

            setAuthToken(response?.data.data.token);

            if (response?.status === 200) {
                dispatch({
                    type: "LOGIN",
                    payload: response.data.data,
                });
                closeModalLogin();
            }
        } catch (error) {
            console.log(error);
        }
    };


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
                    <h2 className="headerModal">Sign In</h2>
                    <Form onSubmit={submitLogin} className='formModal'>
                        <Form.Group className="mb-4" controlId="email">
                            <Form.Control
                                onChange={handleChange}
                                type="email"
                                name="email"
                                id="email"
                                placeholder='Email'
                                className='inputModal'
                                required
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-4"
                            controlId="password"
                        >
                            <Form.Control
                                onChange={handleChange}
                                type="password"
                                name="password"
                                id="password"
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
                                <a href='/' className='link' onClick={closeModalLogin}>Here</a>
                            </small>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}