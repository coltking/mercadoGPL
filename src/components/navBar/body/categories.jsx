import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import 'materialize-css'
import './categories.css'
import { actionCategories, actionSetCategories, actionSetCategoriesFilter } from '../../../redux/actions';

const Categories = () => {
    const dispatch = useDispatch();
    const categories = useSelector(store => store.reducer.categories);
    const loading = useSelector(store => store.reducer.loading);
    const termFromStore = useSelector(store => store.reducer.categoriesFilter);
    const setCategories = (inputValue) => {
        dispatch(actionSetCategoriesFilter(inputValue.toLowerCase()))
    }
    useEffect(() => {
        return dispatch(actionCategories())
    }, [])

    const StructureFilterToRender = () => {
        if (categories.length > 0) {
            const categoriesFiltered = categories.filter(category => category.name.toLowerCase().includes(termFromStore))
            return categoriesFiltered.map(category => <li class="collection-item"><div className='flow-text'>{category.name}<a href={"/body/?category=" + category.id} class="secondary-content"><i class="material-icons green-text">send</i></a></div></li>)
        } else {
            return (<div></div>)
        }
    }
    return (
        <div>
            <div className='container' id='container'>
                <div className='row'>
                    <div className='col s12' style={{ display: loading }}>
                        <div class="progress">
                            <div class="indeterminate"></div>
                        </div>
                    </div>
                    <div class="input-field col s12">
                        <input id="filter" type="text" class="validate center white-text flow-text" onChange={e => {
                            setCategories(e.target.value)
                        }} />
                        <label for="filter">¿Que estas buscando?</label>
                    </div>
                    <div className='col s6 offset-s3'>
                        <ul className='collection radial'>
                            {StructureFilterToRender()}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Categories;
