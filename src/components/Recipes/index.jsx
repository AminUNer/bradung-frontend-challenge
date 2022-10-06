import React from 'react';
import {Box, Button, Container, Grid} from "@mui/material";
import { useSelector } from "react-redux";
import Recipe from "./Recipe";
import {useNavigate} from "react-router-dom";
import {Helmet} from "react-helmet";

const Recipes = () => {
    const navigate = useNavigate();
    const recipes = useSelector((state) => state.recipesReducer.recipes);
    return(
        <Box sx={{ flexGrow: 1 }} margin={1}>
            <Helmet>
                <title>Add Recipe</title>
                <meta name="description" content="A view that enables the user to preview and update existing Recipes or add a new ones" />
            </Helmet>
            <Grid container spacing={2} rowSpacing={1} display="flex" justifyContent="center" alignItems="center">
                {recipes.map((recipe) => (
                    <Recipe key={recipe.id} recipe={recipe} />
                ))}
            </Grid>

            <Container>
                <Box sx={{ flexGrow: 1 }} margin={1}>
                    <Grid container display="flex" justifyContent="flex-end" alignItems="flex-end">
                        <Button variant="contained" color="success" onClick={() => navigate('/add')}>Add</Button>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}
export default Recipes;

