import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ReactMovieCard } from '../../../react-app-env';
import './style.css'

export default function MediaCard(props: ReactMovieCard) {
    return (
        <Card sx={{ maxWidth: 345 }} className='movie_card'>
            <CardMedia
                component="img"
                height="140"
                image={props.poster as string}
                alt={props.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title} {props.ratings}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.plot}
                </Typography>
            </CardContent>
        </Card>
    );
}