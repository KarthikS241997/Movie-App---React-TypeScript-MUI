import { Box, Grid, Paper } from '@mui/material';
import React from 'react'
import { MovieDataType } from '../../assets/data';
import MovieTrendCard from '../movie-card/movieTrendCard';

interface MovieTrendListProps {
    trendingList: MovieDataType[];
}

const MovieTrendList = ({ trendingList }: MovieTrendListProps) => {
    console.log("The TrendingList is: ", trendingList);

    return (
        <Box sx={{ display: "flex", gap: 2 }}>
            {trendingList.map((item) => (
                <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                    <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
                        <MovieTrendCard movie={item} />
                    </Paper>
                </Grid>
            ))}
        </Box>
    );
}

export default MovieTrendList