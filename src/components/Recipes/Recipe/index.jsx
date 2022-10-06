import React from 'react';
import {Card, CardActionArea, CardContent, Grid, IconButton, Typography} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {MARK_RECIPE_FAVORITE} from "../../../constants/ActionTypes";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Helmet} from "react-helmet";

const Recipe = ({recipe}) => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    return(
        <>
            <Helmet>
                <title>Recipe card</title>
                <meta name="description" content="A view that contains the recipe card content" />
            </Helmet>
            <Grid item xs={6} md={4} lg={3} display="flex" justifyContent="center" alignItems="center">
                <Card sx={{ minWidth: 300, minHeight: 150 }}>
                    <CardActionArea>
                        <CardContent onClick={() => navigate(`/edit/${recipe.id}`)}>
                            <Typography gutterBottom variant="h5" component="div" noWrap>
                                { recipe.title }
                            </Typography>
                            <Typography variant="body2" color="text.secondary" noWrap>
                                { recipe.description }
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <IconButton aria-label={recipe.favorite ? 'add to favorites' : 'remove from favorites'} onClick={(e) => {
                        e.preventDefault();
                        dispatch({
                            type: MARK_RECIPE_FAVORITE,
                            payload: recipe.id,
                        });
                    }}>
                        { recipe.favorite ? <FavoriteIcon /> : <FavoriteBorderIcon /> }
                    </IconButton>
                </Card>
            </Grid>
        </>
    )
}
export default Recipe;

