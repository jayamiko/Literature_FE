// Import React
import React, { useContext } from "react";
import { useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContextProvider';
import { useHistory, useParams } from "react-router-dom";

// Import Components
import Navbar from '../../Components/Navbar/Navbar';

// import Style
import './DetailLiterature.css';
import iconDownload from '../../Images/download.png';
import iconCollections from '../../Images/collections.png';
import iconRemove from '../../Images/remove.png';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// import Style
import { API } from '../../config/api';

toast.configure();

export default function DetailLiterature() {

    const { id } = useParams();
    const { stateAuth } = useContext(AuthContext);
    const history = useHistory();
    const [detail, setDetail] = useState(null);
    const [myCollections, setMyCollections] = useState(null);
    const [collected, setCollected] = useState(false);

    const getDetailLiterature = async () => {
        try {
            const response = await API.get(`/literature/${id}`);
            setDetail(response.data.data);

            const collections = await API.get(`/collection/${stateAuth.user?.id}`);
            const newCollections = collections.data.data.filter(
                (item) => item.literature.id === response.data.data.id
            );
            setMyCollections(newCollections[0]);

            for (const myCollection of collections.data.data) {
                if (myCollection.literature.id === response.data.data.id) {
                    setCollected(true);
                } else {
                    setCollected(false);
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleCollect = async () => {
        try {
            if (collected) {
                const response = await API.delete(
                    `/collection/${myCollections.id}`
                );

                if (response?.status === 200) {
                    toast.success(`Delete My Collect Success`, {
                        position: toast.POSITION.BOTTOM_RIGHT,
                        autoClose: 2000
                    })
                }

                setCollected(false);
                getDetailLiterature();
            } else {
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                    },
                };

                const body = JSON.stringify({
                    userId: stateAuth.user?.id,
                    literatureId: detail.id,
                });

                const response = await API.post("/collections", body, config);

                if (response?.status === 200) {
                    toast.success(`Add Collect Success`, {
                        position: toast.POSITION.BOTTOM_RIGHT,
                        autoClose: 2000
                    })
                }

                setCollected(true);
                history.push(`/detail-literature/${detail.id}`)
                getDetailLiterature();
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getDetailLiterature();
    }, []);

    const handleDownload = () => {
        window.open(detail.attache);
    };

    return (
        <>
            <Navbar />
            <div className='detail-box'>
                <div>
                    <iframe src={detail?.attache} title={detail?.title}
                        width="400px" height="543px"
                        style={{ borderRadius: '10px' }} />
                </div>
                <div className="info-detail">
                    <div className='row-detail'>
                        <h1>{detail?.title}</h1>
                        <p
                            style={{
                                bottom: '45px'
                            }}
                        >{detail?.author}</p>
                    </div>

                    <div className='row-detail'>
                        <h3>Publication date</h3>
                        <p>{detail?.publication_date}</p>
                    </div>
                    <div className='row-detail'>
                        <h3>Pages</h3>
                        <p>{detail?.pages}</p>
                    </div>

                    <div className='row-detail'>
                        <h3>ISBN</h3>
                        <p>{detail?.isbn}</p>
                    </div>

                    <button
                        className="btn-download"
                        onClick={handleDownload}
                    >
                        <a href={detail?.attache} download="filepdf">
                            Download
                            <img src={iconDownload} alt="icon-download" />
                        </a>
                    </button>

                </div>
                <div>
                    {!collected ? (
                        <>
                            <button className="btn-collections"
                                onClick={handleCollect}>
                                <a href='#/'>
                                    Add Collections
                                    <img src={iconCollections} alt="icon-collections" />
                                </a>
                            </button>
                        </>
                    ) : (
                        <button className="btn-remove"
                            onClick={handleCollect}
                        >
                            <a href='#/'>
                                Remove Collection
                                <img src={iconRemove} alt="icon-remove" />
                            </a>
                        </button>
                    )}
                </div>
            </div>
        </>
    )
}