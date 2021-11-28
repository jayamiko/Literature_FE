// Import React
import { useHistory } from "react-router-dom";
import { pdfjs, Document, Page } from "react-pdf";

// Import Style
import '../../Pages/Profile/Profile.css';
import './pdf.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function ColectionsPDF(props) {
    const { attache, title, author, publication_date, literatureId } = props;

    const history = useHistory();

    return (
        <div className="my-literature">
            <div
                style={{
                    width: 200,
                    display: 'flex',
                    flexDirection: 'column',
                }}
                onClick={() => {
                    history.push(`/detail-literature/${literatureId}`);
                }}
            >
                <div className="document-pdf" >
                    <Document file={attache} style={{ borderRadius: '10px' }}>
                        <Page pageNumber={1} width={200} height={270} borderRadius={10} className="rounded" />
                    </Document>
                </div>
                <h3 className="h5 fw-bold text-truncate my-3">{title}</h3>
                <div className="d-flex justify-content-between text-muted">
                    <div className="author">{author}</div>
                    <div className="publication-year">{publication_date.split("-")[0]}</div>
                </div>
            </div>
        </div>
    );
}