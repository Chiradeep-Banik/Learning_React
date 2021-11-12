import React, { useEffect, useRef, useState } from "react";
import Movie from "./movie";

export default function Movies() {
    var movies = ['dead poets society', 'Shawshank Redemption', 'Ali', 'Lolita', 'coco'];
    var container_ref = useRef(null);
    var [title, setMovieTitle] = useState('');
    var [plot, setMoviePlot] = useState('');
    var [genre, setMovieGenre] = useState('');
    useEffect(() => {
        movies.forEach(movie => {
            var url = `${process.env.REACT_APP_API_URL}&t=${movie}&plot=full`;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    setMoviePlot(data.Plot);
                    setMovieTitle(data.Title);
                    setMovieGenre(data.Genre);
                }).catch(error => console.log(error));
            if (container_ref.current !== null) {
                console.log(container_ref.current);
                // container_ref.current.appendChild(<Movie title={title} plot={plot} genre={genre} />);
            }
        })
    }, [])

    return (
        <div ref={container_ref}></div>
    );
}