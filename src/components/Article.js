import "./Article.scss";

const Article = ({ artTitle, img, source, description, date, url }) => {
  let wichJournalColor =
    (source.name === "Infobae" && "infobae") ||
    ((source.name === "Cadena 3" ||
      source.name === "Google News" ||
      source.name === "Diario El Litoral" ||
      source.name === "Google News (Argentina)" ||
      source.name === "La Nacion") &&
      "blueJournals") ||
    ((source.name === "Clarín" ||
      source.name === "Ratingcero.com" ||
      source.name === "Minutouno.com" ||
      source.name === "El Ancasti Editorial" ||
      source.name === "Revista Pronto") &&
      "redJournals") ||
    (source.name === "Olé" && "ole") ||
    (source.name === "El Cronista Comercial" && "cronista") ||
    (source.name === "Infobae" && "infobae") ||
    (source.name === "ABC News" && "abc");

  return (
    <article>
      <div className="img-cont">
        <img
          alt="click the tittle for the complete information"
          src={
            img === null
              ? "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
              : img
          }
        />
      </div>
      <div className="date-src">
        <p className={`${wichJournalColor} journalContent else-color`}>
          {source.name}
        </p>
        <span> {date.replace("T", " ").replace("Z", " ")}</span>
      </div>
      <a href={url}>
        <h6>{artTitle}</h6>
      </a>
      <p>{description}</p>
    </article>
  );
};

export default Article;
