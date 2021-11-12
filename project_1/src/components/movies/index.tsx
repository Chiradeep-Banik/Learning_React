import React, { useEffect, useState } from "react";
import Movie from "./movie";
import { FetchResponse } from "../../react-app-env";
import { moveCursor } from "readline";

export default function Movies() {
    var movies = ['dead poets society', 'Shawshank Redemption', 'Ali', 'Lolita', 'coco'];
    var movieArr: FetchResponse[] = [];
    var [moviesRes, setMovies] = useState(movieArr);
    useEffect(() => {
        movies.forEach(movie => {
            var url = `${process.env.REACT_APP_API_URL}&t=${movie}&plot=full`;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    console.log(moviesRes);
                    setMovies(prevState => {
                        prevState.push(data as FetchResponse)
                        return prevState;
                    });
                    console.log(moviesRes.length);
                }).catch(error => console.log(error));
        })
    }, [])
    if (moviesRes.length === 0) {
        return <div>Loading...</div>
    } else {
        return (
            <div>
                {moviesRes.map((movie, index) => {
                    return <Movie key={index} data={movie} />
                })}
                {/* <div>{moviesRes[0].title}</div> */}
            </div>
        );
    }
}