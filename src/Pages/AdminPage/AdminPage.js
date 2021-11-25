// Import Style
import { Table } from "react-bootstrap";

// Import Component
import NavbarAdmin from '../../Components/Navbar/NavbarAdmin'

export default function AdminPage() {
    return (
        <>
            <NavbarAdmin />
            <div style={{ backgroundColor: "white", height: "650px" }}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Users</th>
                            <th>Trip</th>
                            <th>Proof Of Payment</th>
                            <th>Payment Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Jaya Miko</td>
                            <td>6D/4N Fun Tassie Vaca ...</td>
                            <td>bca.jpg</td>
                            <td className="text-warning">Pending</td>
                            <td className="text-center">
                                <img
                                    alt=""
                                    src="/assets/search.png"
                                ></img>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Alfarisyi</td>
                            <td>6D/4N Exciting Summer...</td>
                            <td>bni.jpg</td>
                            <td className="text-success">Approve</td>
                            <td className="text-center">
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Muhammad Ayyub</td>
                            <td>6D/4N Fun Tassie Vaca ...</td>
                            <td>bni.jpg</td>
                            <td className="text-danger">Cancel</td>
                            <td className="text-center">
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Alba</td>
                            <td>6D/4N Wonderful Autum ...</td>
                            <td>permata.jpg</td>
                            <td className="text-danger">Cancel</td>
                            <td className="text-center">
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Annisa</td>
                            <td>6D/4N Magic Tokyo ...</td>
                            <td>bca.jpg</td>
                            <td className="text-success">Approve</td>
                            <td className="text-center">
                            </td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Asep</td>
                            <td>6D/4N Fun Tassie Vaca ...</td>
                            <td>permata.jpg</td>
                            <td className="text-warning">Pending</td>
                            <td className="text-center">
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div >
        </>
    )
}