import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Catalogue = () => {
    const dispatch = useDispatch();
    const result = useSelector(store => store.reducer.searchResult);
    const loading = useSelector(store => store.reducer.loading);

    return (<div>
        <Product style={{ display: 'none' }}></Product>
        {
            (result.length === 0) ? (<div>sin contenido</div>
            ) : (
                    <div>
                        <div className='container' style={{ marginTop: "10px" }} id='container'>
                            <div className='row'>
                                <div className='col s12' style={{ display: loading }}>
                                    <div class="progress">
                                        <div class="indeterminate"></div>
                                    </div>
                                </div>
                                {
                                    result.map(product => {
                                        return <ProductCard product={product} />
                                    })
                                }
                            </div>
                        </div>
                    </div>)
        }
    </div>)
}
export default Catalogue;
