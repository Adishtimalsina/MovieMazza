import style from "../Component/MovieCards.module.css";

const MovieCards = (props) => {
  return (
    <div className={style.container} key={props.Title}>
      {props.Names.map((newName) => (
        <div className={`${style.cards} card`}>
          <div class="card-body">
            <img src={newName.Images} class="card-img-top" alt="..."></img>

            <h5 class="card-title">
              {" "}
              <br />
              Title: {newName.Title}
            </h5>
            <p class="card-text">Actors: {newName.Actors}</p>
            <p class="card-text">IMDB ratinng: {newName.imdbRating}</p>
            <p class="card-text">Released Date: {newName.Released}</p>

            <a href="#" class="btn btn-primary">
              Play
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieCards;
