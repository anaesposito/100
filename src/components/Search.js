import "./Search.scss";
import SearchIcon from "@material-ui/icons/Search";

const Search = ({ handleChange, value }) => {
  return (
    <div className="search-content">
      <SearchIcon className="search-icon" />
      <input onChange={handleChange} value={value} />
    </div>
  );
};

export default Search;
