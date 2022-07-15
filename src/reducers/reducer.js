const initialState = {
    recipes: { breakfast:["hi"], lunch: ["hi"], dinner: [], dessert: [], snack: [] },
    recipe_id: "12",
    users_recipe_history: [
        {date: "date", recipes: {
        breakfast: [{id:"", title: "", fave:""}], 
        lunch: [{id:"", title: "", fave:""}], 
        dinner: [{id:"", title: "", fave:""}], 
        dessert: [{id:"", title: "", fave:""}], 
        snacks: [{id:"", title: "fgdfgfd", fave:""}]}}
    ],
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADING':
            return { ...state, searchTerms: action.payload, loading: true };
        case "SET RECIPES":
            return { ...state, recipes: action.payload }
        case "SET RECIPE ID":
            return { ...state, recipe_id: action.payload }
        case "SET USER RECIPE HISTORY":
            return { ...state, users_recipe_history: action.payload }
        default:
            return state;
    }
}

export default reducer;