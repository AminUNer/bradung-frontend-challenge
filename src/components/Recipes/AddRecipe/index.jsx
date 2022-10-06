import React, {useCallback, useEffect, useState} from 'react';
import {Alert, Box, Button, Container, Grid, Snackbar, TextField, Typography} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ADD_RECIPE, DELETE_RECIPE, UPDATE_RECIPE} from "../../../constants/ActionTypes";
import {guidGenerator} from "../../../utils/idGenerator";
import {Helmet} from "react-helmet";

const AddRecipe = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const { recipeId } = useParams();

    const oldRecipe = useSelector((state) => state.recipesReducer.recipes).find((recipe) => recipe.id === +recipeId);
    const [newRecipe, setNewRecipe] = useState(oldRecipe);
    const [mode, setMode] = useState('ADD');


    const [errorSnacknarOpen, setErrorSnackbarOpen] = useState(false);

    const handleClose = useCallback(
        (event, reason) => {
            if (reason === 'clickaway') {
                return;
            }
            setErrorSnackbarOpen(false);
        },
        [],
    );

    useEffect(() => {
        if (!oldRecipe) {
            navigate('/add');
        } else {
            setMode('VIEW');
        }
    }, [navigate, oldRecipe]);

    return(
        <>
            <Helmet>
                <title>Add Recipe</title>
                <meta name="description" content="A view that enables the user to preview and update existing Recipes or add a new ones" />
            </Helmet>
            <Container maxWidth="md">
                <Box sx={{ flexGrow: 1 }} margin={4}>
                    <Grid container display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                        {
                            mode === 'VIEW' ? (
                                <Grid container display="flex" justifyContent="center" alignItems="center">
                                    <Button color="secondary" variant="contained" onClick={() => navigate('/')}>Back</Button>
                                    <Box margin={8}>
                                        <Typography variant="h3">
                                            Detail
                                        </Typography>
                                    </Box>
                                </Grid>
                            ) : (
                                <Box margin={8}>
                                    <Typography variant="h3">
                                        {oldRecipe ? 'Edit' : 'Add'}
                                    </Typography>
                                </Box>
                            )
                        }
                        <Box margin={2}>
                            <TextField
                                disabled={mode === 'VIEW'}
                                id="outlined-basic"
                                label="Title"
                                defaultValue={oldRecipe?.title}
                                variant="outlined"
                                sx={{ minWidth: 500 }}
                                onChange={(e) => setNewRecipe({
                                    ...newRecipe,
                                    title: e.target.value,
                                })}/>
                        </Box>
                        <Box margin={2}>
                            <TextField
                                disabled={mode === 'VIEW'}
                                id="outlined-basic"
                                label="Ingredient 1"
                                defaultValue={oldRecipe?.ingredient1}
                                variant="outlined"
                                sx={{ minWidth: 500 }}
                                onChange={(e) => setNewRecipe({
                                    ...newRecipe,
                                    ingredient1: e.target.value,
                                })}/>
                        </Box>
                        <Box margin={2}>
                            <TextField
                                disabled={mode === 'VIEW'}
                                id="outlined-basic"
                                label="Ingredient 2"
                                defaultValue={oldRecipe?.ingredient2}
                                variant="outlined"
                                sx={{ minWidth: 500 }}
                                onChange={(e) => setNewRecipe({
                                    ...newRecipe,
                                    ingredient2: e.target.value,
                                })}/>
                        </Box>
                        <Box margin={2}>
                            <TextField
                                disabled={mode === 'VIEW'}
                                id="outlined-basic"
                                label="Ingredient 3"
                                defaultValue={oldRecipe?.ingredient3}
                                variant="outlined"
                                sx={{ minWidth: 500 }}
                                onChange={(e) => setNewRecipe({
                                    ...newRecipe,
                                    ingredient3: e.target.value,
                                })}/>
                        </Box>
                        <Box margin={2}>
                            <TextField
                                disabled={mode === 'VIEW'}
                                id="outlined-multiline-static"
                                label="Description"
                                defaultValue={oldRecipe?.description}
                                multiline
                                sx={{ minWidth: 500 }}
                                onChange={(e) => setNewRecipe({
                                    ...newRecipe,
                                    description: e.target.value,
                                })}
                                rows={4}
                            />
                        </Box>
                        <Grid container display="flex" justifyContent="center" alignItems="center">
                            {
                                mode === 'VIEW' ? (
                                    <>
                                        <Box margin={1}>
                                            <Button variant="contained" color="error" onClick={() => {
                                                dispatch({
                                                    type: DELETE_RECIPE,
                                                    payload: oldRecipe.id,
                                                });
                                                navigate('/');
                                            }}>Delete</Button>
                                        </Box>
                                        <Box margin={1}>
                                            <Button variant="contained" color="success" onClick={() => setMode('EDIT')}>Edit</Button>
                                        </Box>
                                    </>
                                ) : (
                                    <>
                                        <Box margin={1}>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                onClick={() => mode === 'EDIT' ?  setMode('VIEW') : navigate('/')}>Back</Button>
                                        </Box>
                                        {oldRecipe ? (
                                            <Button
                                                variant="contained"
                                                color="success"
                                                onClick={() => {
                                                    if (!newRecipe?.ingredient1 || !newRecipe?.ingredient2 || !newRecipe?.ingredient3 ||
                                                        !newRecipe?.title || !newRecipe?.description) {
                                                        setErrorSnackbarOpen(true);
                                                    } else {
                                                        dispatch({
                                                            type: UPDATE_RECIPE,
                                                            payload: {
                                                                id: newRecipe.id,
                                                                title: newRecipe.title,
                                                                description: newRecipe.description,
                                                                ingredient1: newRecipe.ingredient1,
                                                                ingredient2: newRecipe.ingredient2,
                                                                ingredient3: newRecipe.ingredient3,
                                                                createdAt: newRecipe.createdAt,
                                                                favorite: newRecipe.favorite,
                                                            }
                                                        });
                                                        navigate('/');
                                                    }
                                                }
                                                }>Save</Button>
                                        ) : (
                                            <Button
                                                variant="contained"
                                                color="success"
                                                onClick={() => {
                                                    if (!newRecipe?.ingredient1 || !newRecipe?.ingredient2 || !newRecipe?.ingredient3 ||
                                                        !newRecipe?.title || !newRecipe?.description) {
                                                        setErrorSnackbarOpen(true);
                                                    } else {
                                                        dispatch({
                                                            type: ADD_RECIPE,
                                                            payload: {
                                                                id: guidGenerator(),
                                                                title: newRecipe.title,
                                                                description: newRecipe.description,
                                                                favorite: false,
                                                                ingredient1: newRecipe.ingredient1,
                                                                ingredient2: newRecipe.ingredient2,
                                                                ingredient3: newRecipe.ingredient3,
                                                                createdAt: new Date(),
                                                            }
                                                        });
                                                        navigate('/');
                                                    }
                                                }
                                                }>Add</Button>
                                        )}
                                    </>
                                )
                            }

                        </Grid>
                    </Grid>
                </Box>
                <Snackbar open={errorSnacknarOpen} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        All fields are mandatory.
                    </Alert>
                </Snackbar>
            </Container>
        </>
    )
}
export default AddRecipe;

