import { Box, Grid, Paper } from '@mui/material';
import React from 'react'
import { MovieDataType } from '../../assets/data';
import MovieRecommendCard from '../movie-card/movieRecommendCard';

interface MovieListProps {
    recommendList: MovieDataType[];
}

const MovieRecommendList = ({ recommendList }: MovieListProps) => {
    console.log("The recommendedList is: ", recommendList);
    return (
        <Grid container spacing={2}>
            {recommendList.map((item) => (
                <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                    <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
                        <MovieRecommendCard movie={item} />
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
}

export default MovieRecommendList