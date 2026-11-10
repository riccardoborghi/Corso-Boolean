function ComicCard({ thumb, title, price }) {
    return (
        <div className="comic-card">
            <img src={thumb} alt={title} style={{ width: '150px' }} />
            <h3>{title}</h3>
            <p>{price}</p>
        </div>
    );
}

export default ComicCard;