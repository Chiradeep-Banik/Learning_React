import React, { useEffect, useState } from "react";
import Movie from "./movie";
import './style.css'
let movies = ['dead poets society', 'Shawshank Redemption', 'Ali', 'Lolita', 'coco', 'sex', 'bhi'];

export default function Movies() {
    let movieArr: any[] = [];
    let movieArr2: any[] = [];
    const [moviesRes, setMovies] = useState(movieArr2);
    const [toRender, setRender] = useState(false);
    useEffect(() => {
        const getMovies = async () => {
            for (let i = 0; i < movies.length; i++) {
                var url = `${process.env.REACT_APP_API_URL}&t=${movies[i]}&page=1`;
                let movie_data = await fetch(url);
                let data = await movie_data.json();
                console.log(data);
                movieArr.push(data);
            }
            console.log(movieArr, 'inside useEffect');
            setMovies(movieArr);
        };
        getMovies().then(() => { setRender(true) }).catch(err => console.log(err));
        console.log(moviesRes[0]);
    }, [toRender, movies]);

    if (moviesRes.length === 0) {
        return <div>Loading...</div>
    } else {
        { console.log(moviesRes.length, "=== Inside the last else", moviesRes) }
        return (
            <div className='Movies_container'>
                {moviesRes.map((movie, index) => {
                    return <Movie key={index} poster={movie['Poster']} ratings={movie['imdbRating']} title={movie['Title']} plot={movie['Plot']} />
                })}
            </div>
        );
    }
}