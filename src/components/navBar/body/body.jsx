import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actionCategories, actionFilterResult, actionSearch, actionSetCategory, actionSetLocalResult } from '../../../redux/actions';
import ProductCard from './productCard'
import qs from 'query-string'
import Product from './product';
import 'materialize-css'
import './body.css'

const Body = () => {
    const dispatch = useDispatch()
    const result = useSelector(store => store.reducer.searchResult)
    const resultFiltered = useSelector(store => store.reducer.searchResultFiltered)
    const loading = useSelector(store => store.reducer.loading)
    const search = qs.parse(window.location.search).search;
    const category = qs.parse(window.location.search).category;
    const [pageLimits, setPageLimits] = useState({ min: 0, max: 31 });
    useEffect(() => {
        LoadProducts()
        dispatch(actionCategories())
    }, [])
    const LoadProducts = () => {
        if (search) {
            dispatch(actionSearch(search))
        }
        if (category) {
            dispatch(actionSetCategory(category))
            console.log("carga la categoria: " + category);
        }
    }
    const sort = (term) => {
        switch (term) {
            case 'nameAsc':
                dispatch(actionSetLocalResult([]))
                dispatch(actionSetLocalResult(result.sort((a, b) => {
                    return a.title.localeCompare(b.title)
                })))
                return ""
            case 'nameDesc':
                dispatch(actionSetLocalResult([]))
                dispatch(actionSetLocalResult(result.sort((a, b) => {
                    return b.title.localeCompare(a.title)
                })))
                return ""
            case 'priceAsc':
                dispatch(actionSetLocalResult([]))
                dispatch(actionSetLocalResult(result.sort((a, b) => {
                    return a.price - b.price
                })))
                return ""
            case 'pricedesc':
                dispatch(actionSetLocalResult([]))
                dispatch(actionSetLocalResult(result.sort((a, b) => {
                    return b.price - a.price
                })))
                return ""
            case 'nuevo':
                dispatch(actionFilterResult([]))
                dispatch(actionFilterResult(result.filter(product => product.condition === "nuevo")))
                return ""
            case 'usado':
                dispatch(actionFilterResult([]))
                dispatch(actionFilterResult(result.filter(product => product.condition === "usado")))
                return ""
            default:
                return undefined
        }
    }
    return (<div>
        <Product style={{ display: 'none' }}></Product>
        {
            <div className='container' id='container'>
                <div className='row'>
                    <div className='col s12 wrap' style={{ display: loading }}>
                        <div class="progress">
                            <div class="indeterminate"></div>
                        </div>
                    </div>
                    <div className='col s12'>
                        <a className='col s12 m6 l4 btn waves-effect waves-light' onClick={() => {
                            sort('nameAsc')
                        }}>
                            <i className='material-icons right'>sort_by_alpha</i>
                                    nombre Ascendente
                                    </a>
                        <a className='col s12 m6 l4 btn waves-effect waves-light' onClick={() => {
                            sort('nameDesc')
                        }}>
                            <i className='material-icons right'>sort_by_alpha</i>
                                    nombre descendente
                                    </a>
                        <a className='col s12 m6 l4 btn waves-effect waves-light' onClick={() => {
                            sort('priceAsc')
                        }}>
                            <i className='material-icons right'>attach_money</i>
                                    Precio ascendente
                                    </a>
                        <a className='col s12 m6 l4 btn waves-effect waves-light' onClick={() => {
                            sort('pricedesc')
                        }}>
                            <i className='material-icons right'>attach_money</i>
                                    Precio descendente
                                    </a>
                        <a className='col s12 m6 l4 btn waves-effect waves-light' onClick={() => {
                            sort('nuevo')
                        }}>
                            <i className='material-icons right'>filter_list</i>
                                    Filtrar nuevo
                                    </a>
                        <a className='col s12 m6 l4 btn waves-effect waves-light' onClick={() => {
                            sort('usado')
                        }}>
                            <i className='material-icons right'>filter_list</i>
                                    Filtrar usado
                                    </a>
                    </div>

                    {(resultFiltered.length === 0) ? (<div></div>
                    ) : (
                            <div>
                                <div className='col s12' style={{ marginTop: "5px" }}>
                                    <div className='col s6'>
                                        {(pageLimits.min >= 1) ? (<div id='menorque' className='btn scale-transition waves-effect waves-light' onClick={() => {
                                            setPageLimits({ min: pageLimits.min - 30, max: pageLimits.max - 30 })
                                        }}>
                                            <div>pagina anterior</div>
                                            <i className='material-icons'>arrow_back</i>
                                        </div>) : (<a className='btn disabled z-depth-3 waves-effect waves-light'><div>pagina siguiente</div><i className='material-icons black-text'>arrow_back</i></a>)}
                                    </div>
                                    <div className='col s6 scale-transition'>
                                        {(pageLimits.max < resultFiltered.length) ? (
                                            <div className='row'>
                                                <div id='scale-demo' className='btn scale-transition waves-effect waves-light' onClick={() => {
                                                    setPageLimits({ min: pageLimits.min + 30, max: pageLimits.max + 30 })
                                                }}>
                                                    <div className='text'>pagina siguiente</div><i className='material-icons right'>arrow_forward</i>
                                                </div>
                                            </div>) : (
                                                <div>
                                                    <a className='btn disabled z-depth-3 waves-effect waves-light'><div>pagina siguiente</div><i className='material-icons black-text'>arrow_forward</i></a>
                                                </div>
                                            )}
                                    </div>
                                </div>
                                {
                                    resultFiltered.map((product, index) => {
                                        if (index < pageLimits.max && index > pageLimits.min) {
                                            return <ProductCard product={product} />
                                        }
                                    })
                                }

                                <div className='col s12'>
                                    <div className='col s6'>
                                        {(pageLimits.min >= 1) ? (<div id='menorque' className='btn-floating scale-transition waves-effect waves-light' onClick={() => {
                                            setPageLimits({ min: pageLimits.min - 30, max: pageLimits.max - 30 })
                                        }}>
                                            <i className='material-icons'>arrow_back</i>
                                        </div>) : (<a className='btn-floating disabled z-depth-3' waves-effect waves-light><i className='material-icons black-text'>arrow_back</i></a>)}
                                    </div>
                                    <div className='col s6 scale-transition'>
                                        {(pageLimits.max < resultFiltered.length) ? (<div id='scale-demo' className='btn-floating scale-transition waves-effect waves-light' onClick={() => {
                                            setPageLimits({ min: pageLimits.min + 30, max: pageLimits.max + 30 })
                                        }}>
                                            <i className='material-icons'>arrow_forward</i>
                                        </div>) : (
                                                <a className='btn-floating disabled z-depth-3 waves-effect waves-light'><i className='material-icons black-text'>arrow_forward</i></a>)}
                                    </div>
                                </div>
                            </div>)}

                </div>
            </div>
        }
    </div>)
}
export default Body;
