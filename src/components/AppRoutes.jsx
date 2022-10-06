import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Recipes from "./Recipes";
import AddRecipe from "./Recipes/AddRecipe";

const AppRoutes = () => {
    return(
        <Routes>
            <Route
                path="/edit/:recipeId"
                element={<AddRecipe />}
            />
            <Route
                path="/add"
                element={<AddRecipe />}
            />
            <Route
                index
                path="/"
                element={<Recipes />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRoutes;

