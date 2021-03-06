import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../../components/Card/Card";
import "./Trending.css";
import PaginationRounded from "../../components/Pagination/Pagination";

const Trending = () => {
  const [Page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${Page}`
    );

    setContent(data.results);
    // console.log(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, [Page]);

  return (
    <div>
      <br />
      <span className="pageTitle">--------TRENDING TODAY--------</span>
      <div className="trending">
        {content &&
          content.map((c) => (
            <MovieCard
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
              overview={c.overview}
            />
          ))}
      </div>
      <br />
      <PaginationRounded setPage={setPage} />
      <br />
    </div>
  );
};

export default Trending;
