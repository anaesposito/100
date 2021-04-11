import "./NavBar.scss";
const NavBar = ({ onClickable }) => {
  return (
    <div className="title">
      <h1>Journal News</h1>
      <div className="topJournals">
        <h4
          onClick={onClickable}
          data-source="google-news-ar"
          className="googleBar"
        >
          Google News
        </h4>
        <h4 onClick={onClickable} data-source="infobae" className="infobaeBar">
          Infobae
        </h4>
        <h4 onClick={onClickable} data-source="abc-news" className="abcBar">
          ABC
        </h4>
        <h4 onClick={onClickable} data-source="la-nacion" className="nacionBar">
          La Nación
        </h4>
      </div>
    </div>
  );
};

export default NavBar;
