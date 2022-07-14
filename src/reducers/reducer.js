const initialState = {
    recipes: [],
    recipe_id: ""
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case "SET RECIPES":
            return { recipes: action.payload }
        case "SET RECIPE ID":
            return { recipe_id: action.payload }
        default:
            return state;
    }
}

export default reducer;