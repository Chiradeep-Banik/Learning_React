import * as React from 'react';
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ReactMovieCard from '../../../react-app-env';

export default function Movie(props: ReactMovieCard) {
    var url = `${process.env.REACT_APP_API_URL}&t=avengers&plot=full`;
    // function updateMovie() {
    //     var random = Math.floor(Math.random() * movies.length);
    //     var url = `${process.env.REACT_APP_API_URL}&t=${movies[random]}&plot=full`;
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(data => {
    //             setMoviePlot(data.Plot);
    //             setMovieTitle(data.Title);
    //             setMovieGenre(data.Genre);
    //         }).catch(error => console.log(error));
    // }
    const card = (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props.title}
                </Typography>
                <Typography variant="h5" component="div">
                    {props.plot}
                </Typography>
                <Typography variant="body2">
                    Genre: {props.genre}
                </Typography>
            </CardContent>
        </React.Fragment>
    );
    return (
        <Box sx={{ minWidth: 275 }} >
            <Card variant="outlined">{card}</Card>
        </Box>
    );
}