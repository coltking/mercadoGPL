import { CLEAR_PRODUCT, SEARCH_RESULT, SEARCH_RESULT_FILTERED, SET_CATEGORIES_FILTER, SET_CATEGORIES_LIST, SET_LOADING, SET_PRODUCT } from "./constants";

var initialState = {
    terms: [],
    searchResult: [],
    searchResultFiltered: [],
    product: [],
    loading: "none",
    categories: [],
    categoriesFilter: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_RESULT_FILTERED:
            return { ...state, searchResultFiltered: action.payload}
        case SET_CATEGORIES_FILTER:
            return { ...state, categoriesFilter: action.payload }
        case SET_CATEGORIES_LIST:
            return { ...state, categories: action.payload }
        case SET_LOADING:
            return { ...state, loading: action.payload }
        case CLEAR_PRODUCT:
            return { ...state, product: [] }
        case SET_PRODUCT:
            return { ...state, product: action.payload }
        case SEARCH_RESULT:
            return { ...state, searchResult: action.payload, searchResultFiltered: action.payload }
        default:
            return state
    }
}
export default reducer;
