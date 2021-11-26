

export default function colectionsPDF(props) {
    const { attache, title, author, publication_date } = props;
    return (
        <div className="my-collections" style={{ width: 200 }}>
            <iframe src={attache} title={title} width="200" height="270" />
            <h3 className="h6 fw-bold text-truncate">{title}</h3>
            <div className="d-flex justify-content-between text-muted">
                <div className="author">{author}</div>
                <div className="publication-year">{publication_date.split("-")[0]}</div>
            </div>
        </div>
    );
}