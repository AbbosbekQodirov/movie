import React from "react";
import { motion } from "framer-motion";

function Movie({ movie, setModal, setOneMovie }) {

  console.log(movie);
  return (
    <motion.div
      layout
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.4 }}
      onClick={() => {
        setModal(true);
        setOneMovie(movie);
      }}
    >
      <h2 className="movie-title">{movie.title}</h2>
      <div className="img">
        <img
          src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
          alt=""
        />
      </div>
    </motion.div>
  );
}

export default Movie;
