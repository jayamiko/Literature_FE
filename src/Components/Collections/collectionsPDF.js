import '../../Pages/Profile/Profile.css'

export default function colectionsPDF(props) {
    const { attache, title, author, publication_date } = props;
    return (
        <div className="my-literature">
            <div style={{ width: 200 }}>
                <iframe src={attache} title={title} width="210" height="270" />
                <h3 className="h6 fw-bold text-truncate">{title}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '-10px' }}>
                    <div className="author">{author}</div>
                    <div className="publication">{publication_date.split("-")[0]}</div>
                </div>
            </div>
        </div>
    );
}