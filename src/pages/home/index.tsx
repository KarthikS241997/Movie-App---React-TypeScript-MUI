import React, { SetStateAction, useContext, useState } from 'react'
import Layout from '../../Layout'
import { Box, InputAdornment, InputBase, Paper, Typography } from '@mui/material'
import SearchIcon from "../../assets/icons/icon-search.svg";
import MovieTrendList from '../../components/movie-list/movieTrendList';
import MovieRecommendList from '../../components/movie-list/movieRecommendList';
import { MovieDataType } from '../../assets/data';
import { MovieContext } from '../../context/movie-contet';


const Home = () => {

    const [search, setSearch] = useState("");
    const [searchList, setSearchList] = useState<MovieDataType[]>([]);
    const { state } = useContext(MovieContext);
    const { movies } = state;
    const trendingList = movies.filter(item => item.isTrending === true);
    const recommendList = movies.filter(item => item.isTrending !== true);

    const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
        setSearch(e.target.value);
        const newList = movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()));
        setSearchList(newList);
    }
    return (<Layout>
        <Box>
            <Paper component="form"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "default",
                    p: 1,
                    background: "#10141f",
                    border: "none",
                }}>
                <InputBase
                    placeholder='Search for movies or Tv series'
                    sx={{
                        ml: 1,
                        flex: 1,
                        color: "white",
                        border: "none",
                    }}
                    value={search}
                    onChange={handleSearch}
                    startAdornment={
                        <InputAdornment position='start'>
                            <img src={SearchIcon}
                                alt='Search Icon'
                                width={20}
                                height={20}
                            />
                        </InputAdornment>
                    } />
            </Paper>
        </Box>
        <Box py={2} px={4}>
            {search === "" ? (
                <Box width="100%">
                    <Box width="100%">
                        <Typography variant='h5' component="h1" my={6} fontWeight={400}>
                            Trending
                        </Typography>
                        <MovieTrendList trendingList={trendingList} />
                    </Box>
                    <Box width="100%">
                        <Typography variant='h5' component="h1" my={6} fontWeight={400}>
                            Recommended For You
                        </Typography>
                        <MovieRecommendList recommendList={recommendList} />
                    </Box>
                </Box>
            ) : (
                <Box width="100%">
                    <Typography>Found {searchList.length} results for "{search}"</Typography>
                    <MovieRecommendList recommendList={searchList} />
                </Box>
            )}
        </Box>
    </Layout>)
}

export default Home