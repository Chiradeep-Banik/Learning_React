import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ReactMovieCard } from '../../../react-app-env';

export default function MediaCard(props: ReactMovieCard) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={props.data.poster as string}
                alt={props.data.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.data.title} {props.data.ratings}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.data.plot}
                </Typography>
            </CardContent>
        </Card>
    );
}