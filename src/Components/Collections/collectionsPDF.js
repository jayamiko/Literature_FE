// Import React
import { pdfjs, Document, Page } from "react-pdf";
import { Link } from "react-router-dom";

// Import Style
import '../../Pages/Profile/Profile.css';
import './pdf.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function ColectionsPDF(props) {
    const { attache, title, author, publication_date, literatureId, status } = props;

    console.log(status);

    return (
        <>
            {status === "Approve" ? (
                <div div className="my-literature" >
                    <Link to={`/detail-literature/${literatureId}`}
                        style={{ textDecoration: 'none' }}
                    >
                        <div
                            style={{
                                width: 200,
                                display: 'flex',
                                flexDirection: 'column',
                                cursor: 'pointer',
                            }}
                        >
                            <div className="document-pdf" >
                                <Document file={attache} style={{ borderRadius: '10px' }}>
                                    <Page pageNumber={1} width={200} height={270} borderRadius={10} className="frame-pdf" />
                                </Document>
                            </div>
                            <h3 className="h5 fw-bold text-truncate my-3">{title}</h3>
                            <div
                                style={{
                                    justifyContent: 'space-between',
                                    display: 'flex'
                                }}>
                                <div className="author">{author}</div>
                                <div className="publication-year"
                                    style={{
                                        color: '#929292',
                                    }}
                                > {publication_date.split("-")[0]}</div>
                            </div>
                        </div>
                    </Link>
                </div>
            ) : (
                <></>
            )}
        </>
    );
}