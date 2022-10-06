import * as types from '../../constants/ActionTypes';
import {guidGenerator} from "../../utils/idGenerator";

const initialState = {
    recipes: [
        {
            id: guidGenerator(),
            title: 'Peppermint Meringue',
            description: 'A cookie box filled with a wide assortment of shapes, sizes and colors is such a treat to gift during the holidays. These peppermint meringues are the perfect addition to add a pop of color and fun. They practically scream “holiday!” and they taste fantastic as well.',
            ingredient1: 'egg whites',
            ingredient2: 'kosher salt',
            ingredient3: 'cream of tartar',
            favorite: true,
            createdAt: new Date(),
        },
        {
            id: guidGenerator(),
            title: 'Pulled Pork Nachos',
            description: 'One of the best parts of nachos is the contrast between the crispy chips, the gooey cheese, the fresh toppings, and whatever creaminess you decide to dollop on top.',
            ingredient1: 'corn chips',
            ingredient2: 'barbecued pulled pork',
            ingredient3: 'sliced pickled jalapeños',
            favorite: false,
            createdAt: new Date(),
        },
        {
            id: guidGenerator(),
            title: 'Garlic Bread Pizza Dip',
            description: 'Preheat oven to 350°. In a large bowl, mix together 2 cups mozzarella, cream cheese, ricotta, ⅓ cup Parmesan, Italian seasoning, and red pepper flakes. Season with salt. Transfer mixture to a 9"-x-13" baking dish then spread pizza sauce on top. Top with remaining 1 cup mozzarella and pepperoni.',
            ingredient1: 'shredded mozzarella',
            ingredient2: 'minced garlic',
            ingredient3: 'pizza sauce ',
            favorite: false,
            createdAt: new Date(),
        },
        {
            id: guidGenerator(),
            title: 'Pulled Pork Nachos',
            description: 'One of the best parts of nachos is the contrast between the crispy chips, the gooey cheese, the fresh toppings, and whatever creaminess you decide to dollop on top.',
            ingredient1: 'corn chips',
            ingredient2: 'barbecued pulled pork',
            ingredient3: 'sliced pickled jalapeños',
            favorite: false,
            createdAt: new Date(),
        },
        {
            id: guidGenerator(),
            title: 'Garlic Bread Pizza Dip',
            description: 'Preheat oven to 350°. In a large bowl, mix together 2 cups mozzarella, cream cheese, ricotta, ⅓ cup Parmesan, Italian seasoning, and red pepper flakes. Season with salt. Transfer mixture to a 9"-x-13" baking dish then spread pizza sauce on top. Top with remaining 1 cup mozzarella and pepperoni.',
            ingredient1: 'shredded mozzarella',
            ingredient2: 'minced garlic',
            ingredient3: 'pizza sauce ',
            favorite: true,
            createdAt: new Date(),
        },
        {
            id: guidGenerator(),
            title: 'Peppermint Meringue',
            description: 'A cookie box filled with a wide assortment of shapes, sizes and colors is such a treat to gift during the holidays. These peppermint meringues are the perfect addition to add a pop of color and fun. They practically scream “holiday!” and they taste fantastic as well.',
            ingredient1: 'egg whites',
            ingredient2: 'kosher salt',
            ingredient3: 'cream of tartar',
            favorite: false,
            createdAt: new Date(),
        },
        {
            id: guidGenerator(),
            title: 'Pulled Pork Nachos',
            description: 'One of the best parts of nachos is the contrast between the crispy chips, the gooey cheese, the fresh toppings, and whatever creaminess you decide to dollop on top.',
            ingredient1: 'corn chips',
            ingredient2: 'barbecued pulled pork',
            ingredient3: 'sliced pickled jalapeños',
            favorite: false,
            createdAt: new Date(),
        },
        {
            id: guidGenerator(),
            title: 'Garlic Bread Pizza Dip',
            description: 'Preheat oven to 350°. In a large bowl, mix together 2 cups mozzarella, cream cheese, ricotta, ⅓ cup Parmesan, Italian seasoning, and red pepper flakes. Season with salt. Transfer mixture to a 9"-x-13" baking dish then spread pizza sauce on top. Top with remaining 1 cup mozzarella and pepperoni.',
            ingredient1: 'shredded mozzarella',
            ingredient2: 'minced garlic',
            ingredient3: 'pizza sauce ',
            favorite: false,
            createdAt: new Date(),
        },
        {
            id: guidGenerator(),
            title: 'Peppermint Meringue',
            description: 'A cookie box filled with a wide assortment of shapes, sizes and colors is such a treat to gift during the holidays. These peppermint meringues are the perfect addition to add a pop of color and fun. They practically scream “holiday!” and they taste fantastic as well.',
            ingredient1: 'egg whites',
            ingredient2: 'kosher salt',
            ingredient3: 'cream of tartar',
            favorite: false,
            createdAt: new Date(),
        },
        {
            id: guidGenerator(),
            title: 'Pulled Pork Nachos',
            description: 'One of the best parts of nachos is the contrast between the crispy chips, the gooey cheese, the fresh toppings, and whatever creaminess you decide to dollop on top.',
            ingredient1: 'corn chips',
            ingredient2: 'barbecued pulled pork',
            ingredient3: 'sliced pickled jalapeños',
            favorite: true,
            createdAt: new Date(),
        },{
            id: guidGenerator(),
            title: 'Peppermint Meringue',
            description: 'A cookie box filled with a wide assortment of shapes, sizes and colors is such a treat to gift during the holidays. These peppermint meringues are the perfect addition to add a pop of color and fun. They practically scream “holiday!” and they taste fantastic as well.',
            ingredient1: 'egg whites',
            ingredient2: 'kosher salt',
            ingredient3: 'cream of tartar',
            favorite: false,
            createdAt: new Date(),
        },
        {
            id: guidGenerator(),
            title: 'Pulled Pork Nachos',
            description: 'One of the best parts of nachos is the contrast between the crispy chips, the gooey cheese, the fresh toppings, and whatever creaminess you decide to dollop on top.',
            ingredient1: 'corn chips',
            ingredient2: 'barbecued pulled pork',
            ingredient3: 'sliced pickled jalapeños',
            favorite: false,
            createdAt: new Date(),
        },
    ],
};

const recipesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_RECIPE: {
            return {
                ...state,
                recipes: [
                    ...state.recipes,
                    action.payload,
                ]
            };
        }
        case types.UPDATE_RECIPE: {
            const updateIndex = state.recipes.findIndex(
                (e) => e.id === action.payload.id
            );
            return {
                ...state,
                recipes: [
                    ...state.recipes.slice(0, updateIndex),
                    action.payload,
                    ...state.recipes.slice(updateIndex + 1),
                ],
            };
        }
        case types.DELETE_RECIPE: {
            return {
                ...state,
                recipes: state.recipes.filter((element) => element.id !== action.payload),
            };
        }
        case types.MARK_RECIPE_FAVORITE: {
            const updateIndex = state.recipes.findIndex(
                (e) => e.id === action.payload
            );
            return {
                ...state,
                recipes: [
                    ...state.recipes.slice(0, updateIndex),
                    {
                        ...state.recipes[updateIndex],
                        favorite: !state.recipes[updateIndex].favorite,
                    },
                    ...state.recipes.slice(updateIndex + 1),
                ],
            };
        }

        default:
            return state;
    }
};

export default recipesReducer;

