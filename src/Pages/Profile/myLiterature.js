// Import React
import { useState, useEffect } from "react";

// Import Components
import CollectionsPDF from '../../Components/Collections/collectionsPDF'

// Import API
import { API } from "../../config/api";

export default function MyLiteature({ stateAuth }) {
    const [myLiterature, setMyLiterature] = useState([])

    const getMyLiterature = async () => {
        try {
            const response = await API.get(`/profile/${stateAuth}/literatures`);
            setMyLiterature(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getMyLiterature();
    }, []);
    console.log(myLiterature);

    return (
        <>
            <section className="my-collections mt-5">
                <div className="container-literature">
                    <div className="row">
                        {myLiterature.map((item, index) => (
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