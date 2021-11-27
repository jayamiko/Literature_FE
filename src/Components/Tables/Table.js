import React from "react";
import { Container, Button, Table, Card } from "react-bootstrap";

import "./Table.css";

export default function TableVerification() {
    return (
        <>
            <Container className='container-table'>
                <h1 className="title-verification mt-5 mb-4">Book verification</h1>
                <Card className='card-table'>
                    <Card.Body >
                        <Table hover className="table-body">
                            <thead>
                                <tr className="tb-header">
                                    <th style={{ paddingLeft: '10px' }}>No</th>
                                    <th style={{ paddingLeft: '10px' }}>Users or Author</th>
                                    <th style={{ paddingLeft: '10px' }}>ISBN</th>
                                    <th style={{ paddingLeft: '10px' }}>Literatur</th>
                                    <th style={{ paddingLeft: '10px' }}>Status</th>
                                    <th style={{ paddingLeft: '10px' }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-center">1</td>
                                    <td>Tess</td>
                                    <td>Tess</td>
                                    <td className="text-primary">Tess</td>
                                    <td>Tess</td>
                                    <td className="row-action">
                                        <Button className="btn-dangers">Cancel</Button>
                                        <Button className="btn-succes">Approve</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center">2</td>
                                    <td>Tess</td>
                                    <td>Tess</td>
                                    <td className="text-primary">Tess</td>
                                    <td>Tess</td>
                                    <td className="row-action">
                                        <Button className="btn-dangers">Cancel</Button>
                                        <Button className="btn-succes">Approve</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}