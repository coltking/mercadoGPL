import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import M from 'materialize-css'
import './product.css'
import { actionClearProduct } from '../../../redux/actions';

const Product = () => {
    const dispatch = useDispatch()
    const product = useSelector(store => store.reducer.product);
    const loading = useSelector(store => store.reducer.loading);
    const [pageLimits, setPageLimits] = useState(0);
    const mb = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(mb, {

    })
    return (
        <div>
            <div class="container" id='productContainer' style={{ display: 'none', marginTop: "10px" }}>
                <div class="row">
                    <div className='col s12' style={{ display: loading }}>
                        <div class="progress">
                            <div class="indeterminate"></div>
                        </div>
                    </div>
                    <div className='col s3'>
                        {(pageLimits >= 1) ? (<div id='menorque' className='btn-floating scale-transition' onClick={() => {
                            setPageLimits(pageLimits - 1)
                        }}>
                            <i className='material-icons'>arrow_back</i>
                        </div>) : (<a className='btn-floating disabled z-depth-3'><i className='material-icons'>arrow_back</i></a>)}
                    </div>
                    <div className='col s6'>
                        <div className='btn-floating' style={{ borderRadius: "20px" }} onClick={() => {
                            dispatch((actionClearProduct()));
                            setPageLimits(0)
                            document.getElementById('container').style.display = 'block'
                            document.getElementById('productContainer').style.display = 'none'

                        }}>
                            <i className='material-icons'>close</i>
                        </div>
                    </div>
                    <div className='col s3 scale-transition'>
                        {(pageLimits <= product.length - 2) ? (<div id='scale-demo' className='btn-floating scale-transition' onClick={() => {
                            setPageLimits(pageLimits + 1)
                        }}>
                            <i className='material-icons'>arrow_forward</i>
                        </div>) : (
                                <a className='btn-floating disabled z-depth-3'><i className='material-icons'>arrow_forward</i></a>)}
                    </div>
                    {(product.length > 0) ? (
                        <div className="col s12">
                            <img src={product[pageLimits].secure_url} alt="" className="responsive-img card" style={{ borderRadius: "20px" }} />
                        </div>
                    ) : (
                            <div></div>
                        )
                    }
                </div>

            </div>
        </div>)
}
export default Product;