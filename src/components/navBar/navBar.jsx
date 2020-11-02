import './navBar.css'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createBrowserHistory } from 'history'
import { actionCategories, actionSearch, actionSetCategoriesFilter } from '../../redux/actions'
import 'materialize-css'
import './navBar.css'
import M from 'materialize-css'
const NavBar = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actionCategories())
    }, [])
    const history = createBrowserHistory({})
    const mb = document.querySelectorAll('.dropdown-trigger');
    M.Materialbox.init(mb, {

    })

    return (
        <div>
            <div class="navbar-fixed">
                <nav className='green'>
                    <div class="nav-wrapper">
                        <ul class="left">
                            <li>
                                <a>
                                    <i class="hamburger material-icons hide-on-med-and-up">menu</i>
                                </a>
                            </li>
                        </ul>
                        <form action="" method="post">
                            <div class="input-field black ">
                                <input id="search" type="search" placeholder='¿Que estas buscando?' name="search" onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault()
                                        dispatch(actionSearch(e.target.value))
                                        window.location.href = '/body/?search=' + e.target.value
                                        return false
                                    }
                                }} />
                                <label class="label-icon" for="search">
                                    <i class="material-icons white-text">search</i>
                                </label>
                                <i class="material-icons">close</i>
                            </div>
                        </form>
                        <ul class="right">
                            <li>
                                <a onClick={() => {
                                    window.location.href = '/'
                                }}><i className='material-icons'>home</i></a>
                            </li>
                            <li>
                                <a className='flow-text' onClick={() => {
                                    window.location.href = '/categories'
                                }
                                }>categorias</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>)
}

export default NavBar