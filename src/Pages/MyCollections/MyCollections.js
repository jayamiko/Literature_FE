// Import React
import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { AuthContext } from '../../Context/AuthContextProvider';

// import Style
import './MyCollections.css';

// Import Components
import Navbar from '../../Components/Navbar/Navbar';
import CollectionsPDF from '../../Components/Collections/collectionsPDF';

// Import API
import { API } from '../../config/api'

export default function MyCollections() {

    const { stateAuth } = useContext(AuthContext);

    const [myCollections, setMyCollections] = useState([]);

    const getMyCollections = async () => {
        try {
            const response = await API.get(`/collection/${stateAuth.user?.id}`);

            setMyCollections(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getMyCollections();
    }, []);

    console.log(myCollections);

    return (
        <>
            <Navbar />

            <div className='container-mycollections'>
                <div>
                    <p className="title-mycollections">My Collections</p>
                </div>

                <div className='mycollections'>
                    {myCollections.map((item, index) => (
                        <CollectionsPDF
                            attache={item?.literature.attache}
                            literatureId={item?.literature.id}
                            title={item?.literature.title}
                            author={item?.literature.author}
                            publication_date={item?.literature.publication_date}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}