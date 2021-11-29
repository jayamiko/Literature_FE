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
                <div
                    className="my-literature"
                >
                    <Link to={`/detail-literature/${literatureId}`}
                        style={{ textDecoration: 'none' }}
                    >
                        <div
                            style={{
                                width: '200px',
                                height: '400px',
                                flexWrap: 'wrap',
                                justifyContent: 'flex-start',
                                marginTop: '25px',
                                cursor: 'pointer',
                            }}
                        >
                            <div>
                                <Document file={attache} style={{
                                    borderRadius: '10px',
                                    position: 'absolute',
                                }}>
                                    <Page pageNumber={1} width={200} height={270} borderRadius={10} />
                                </Document>
                            </div>
                            <div
                                style={{
                                    position: 'relative',
                                    bottom: '40px',
                                    marginBottom: '20px',
                                    fontFamily: "Times New Roman",
                                    fontStyle: "normal",
                                    fontWeight: "bold",
                                    fontSize: "24px",
                                    lineHeight: "120.5%",
                                    color: "#FFFFFF",
                                }}
                                className="title-file"
                            >{title}</div>
                            <div
                                style={{
                                    justifyContent: 'space-between',
                                    display: 'flex',
                                    position: 'relative',
                                    bottom: '40px'
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