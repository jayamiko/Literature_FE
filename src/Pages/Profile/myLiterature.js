// Import React
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../Context/AuthContextProvider";

// Import Components
import CollectionsPDF from '../../Components/Collections/collectionsPDF'

// Import API
import { API } from "../../config/api";

export default function MyCollections() {
    const [myCollections, setMyCollections] = useState([])
    const { stateAuth, dispatch } = useContext(AuthContext);
    console.log(stateAuth);

    const getMyCollections = async () => {
        try {
            const response = await API.get(`/profile/${stateAuth.user?.id}/literatures`);
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
            <section className="my-collections mt-5">
                <div className="container">
                    <h1 className="h3 fw-bold mb-4">My Literature</h1>
                    <div className="row">
                        {myCollections.map((item, index) => (
                            <div
                                className="col-3 d-flex justify-content-center"
                                key={`collections-${index}`}
                            >
                                <CollectionsPDF
                                    attache={item.attache}
                                    title={item.title}
                                    author={item.author}
                                    publication_date={item.publication_date}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}