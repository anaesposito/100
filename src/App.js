import "./App.scss";
import Article from "./components/Article";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import Search from "./components/Search";

const App = () => {
  const [content, setContent] = useState([]);
  const [country, setCountry] = useState(`country=ar`);
  const [srcFilter, setSrcFilter] = useState("");
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    setSrcFilter(`sources=${e.target.dataset.source}`);
    setCountry("");
  };

  const handleChange = (e) => {
    setValue(`q=${e.target.value}`);
    setSrcFilter("");
    setCountry("");
  };
  // GET https://newsapi.org/v2/top-headlines?q=trump&apiKey=0b52949e39c14134970781f69c8ab271

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?${srcFilter}${country}${value}&apiKey=0b52949e39c14134970781f69c8ab271`
    )
      .then((res) => res.json())
      .then((data) => {
        setContent(data.articles);
      });
  }, [value, srcFilter, country]);

  return (
    <div>
      <div className="navSection">
        <NavBar onClickable={handleClick} />
        <Search onChanges={handleChange} values={value} />
      </div>
      <div className="App">
        {content.map((part, i) => (
          <Article
            key={i}
            artTitle={part.title}
            img={part.urlToImage}
            source={part.source}
            description={part.description}
            date={part.publishedAt}
            url={part.url}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
