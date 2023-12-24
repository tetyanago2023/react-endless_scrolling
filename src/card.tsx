import './card.css';

const Card = ({ title, author_name, first_publish_year, cover_i, number_of_pages_median, ratings_average, first_sentence}) => {
    return (
        <div className="card">
            <img src={`https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`} alt={title}/>
            <div>
                <h4>{title}</h4>
                <p className="year">Year: <b>{first_publish_year}</b></p>
                <p>Author: <b>{author_name.length && author_name[0]}</b></p>
                <p>Pages: <b>{number_of_pages_median}</b></p>
                <p>Rating: <b>{ratings_average}</b></p>
                <p className="first-sentance">{first_sentence && first_sentence.length && first_sentence[0]}</p>
            </div>
        </div>
    )
}

export default Card;
