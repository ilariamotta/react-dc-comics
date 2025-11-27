export default function ComicCard(props) {
    return (
    <div className="col-main" key={props.id}>
        <img src={props.thumb} alt={props.title} />
        <p className="comics-title">{props.title}</p>
        </div>
);
}

