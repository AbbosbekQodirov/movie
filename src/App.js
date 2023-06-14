import { useEffect, useState } from "react";
import "./App.css";
import Filter from "./Filter";
import Movie from "./Movie";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";

function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  const [modal, setModal] = useState(false);
  const [oneMovie, setOneMovie] = useState([]);

  //xavfsizlik
  


  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=e3eba846fb6af8da7df4730f6734f0f7&language=en-US&page=1"
    );
    const movies = await data.json();


    

    setPopular(movies.results);
    setFiltered(movies.results);
  };
  return (
    <div className="App">
      <div className="project_name">
        Abbosbek movies via api
      </div>
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout className="popular-movies">
        <AnimatePresence>
          {filtered.map((movie) => {
            return (
              <Movie
                setOneMovie={setOneMovie}
                setModal={setModal}
                key={movie.id}
                movie={movie}
              />
            );
          })}
        </AnimatePresence>
      </motion.div>
      <div className={modal === true ? "info active" : "info"}>
        <div className="movie_info">
          <div
            onClick={() => {
              setModal(false);
            }}
            className="exit"
          >
            <i className="fa-solid fa-xmark">{console.log(oneMovie)}</i>
          </div>

          <div className="info-img">
            <img
              src={"https://image.tmdb.org/t/p/w500" + oneMovie.backdrop_path}
              alt=""
            />
          </div>
          <div className="info-text">
            <div className="movie_name">{oneMovie.title}</div>
            <div className="content">
              <div>Release-date:</div>
              <div>{oneMovie.release_date}</div>
            </div>
            <div className="content">
              <div>Popularity</div>
              <div>{oneMovie.popularity}</div>
            </div>
            <div className="content">
              <div>Original Language</div>
              <div>{oneMovie.original_language}</div>
            </div>
            <p>Overview:</p>
            <div className="content overview">{oneMovie.overview}</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
