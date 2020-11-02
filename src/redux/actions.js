
import { CLEAR_PRODUCT, SEARCH_RESULT, SEARCH_RESULT_FILTERED, SET_CATEGORIES_FILTER, SET_CATEGORIES_LIST, SET_LOADING, SET_PRODUCT } from './constants'
import axios from 'axios'
const url = 'http://localhost:3000'
export const actionSearch = (term) => {
    return (dispatch) => {
        dispatch(actionSetLoading(true))
        axios.get(url + '/search/?term=' + term, { withCredentials: true }).then(res => {
            dispatch({ type: SEARCH_RESULT, payload: res.data })
        }).then(() => {
            dispatch(actionSetLoading(false))
        })
            .catch((e) => {
                console.log('error: ', e)
                dispatch(actionSetLoading(false))
            })
    }
}
export const actionSetLocalResult = (result) => {
    actionSetLoading(true)
    return (dispatch) => {
        dispatch({ type: SEARCH_RESULT, payload: result })
        dispatch(actionSetLoading(false))
    }
}
export const actionFilterResult = (result) => {
    actionSetLoading(true)
    return (dispatch) => {
        dispatch({type: SEARCH_RESULT_FILTERED, payload: result})
        dispatch(actionSetLoading(false))
    }
}
export const actionSetProduct = (id, bool) => {
    return (dispatch) => {
        dispatch(actionSetLoading(true))
        axios.get(url + '/search/galery/?term=' + id, { withCredentials: true }).then(res => {
            dispatch({ type: SET_PRODUCT, payload: res.data })
        }).then(() => {
            dispatch(actionSetLoading(false))
        })
    }
}
export const actionClearProduct = () => {
    return (dispatch) => {
        dispatch({ type: CLEAR_PRODUCT })
    }
}
export const actionSetLoading = (bool) => {
    return (dispatch) => {
        if (bool) {
            return dispatch({ type: SET_LOADING, payload: "block" })
        } else {
            return dispatch({ type: SET_LOADING, payload: "none" })
        }
    }
}
export const actionCategories = () => {
    return (dispatch) => {
        axios.get(url + '/search/categories', { withCredentials: true }).then(resp => {
            dispatch({ type: SET_CATEGORIES_LIST, payload: resp.data })
        })
    }
}
export const actionSetCategory = (id) => {
    return (dispatch) => {
        dispatch(actionSetLoading(true))
        axios.get(url + '/search/category/' + id, { withCredentials: true }).then(resp => {
            console.log("resp.data", resp.data);
            dispatch({ type: SEARCH_RESULT, payload: resp.data })
        }).then(() => {
            dispatch(actionSetLoading(false))
        })
            .catch((e) => {
                console.log('error: ', e)
                dispatch(actionSetLoading(false))
            })
    }
}
export const actionSetCategories = (categories) => {
    return (dispatch) => {
        dispatch({ type: SET_CATEGORIES_LIST, payload: categories })
    }
}
export const actionSetCategoriesFilter = (inputString) => {
    return (dispatch) => {
        dispatch({ type: SET_CATEGORIES_FILTER, payload: inputString })
    }
}
