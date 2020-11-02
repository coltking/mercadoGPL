import React, { useEffect, useState } from 'react'
import 'materialize-css'
import './productCard.css'
import { actionSetProduct } from '../../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

const ProductCard = ({ product }) => {
    useEffect(() => {
        Structure()
    })
    const dispatch = useDispatch()
    const randomColor = () => { return Math.floor(Math.random() * 16777215).toString(16) };
    const color = "4dbb4d"


    const Structure = () => {
        if (product.condition === "new") {
            product.condition = 'nuevo'
        } else if (product.condition === 'used') { product.condition = 'usado' }
    }
    return (
        <div>
            <div className='col s12 m6 l4' style={{ borderRadius: "20px" }}>
                <div className='card small sticky-action ' style={{ backgroundColor: "#" + color, borderRadius: "20px" }}>
                    <div className='card-image waves-effect waves-block waves-light ' style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}>
                        <img data-target="modal1" src={product.thumbnail} alt='' onClick={() => {
                            dispatch((actionSetProduct(product.id, true)));
                            document.getElementById('container').style.display = 'none'
                            document.getElementById('productContainer').style.display = 'block'

                        }}></img>
                    </div>
                        <div class="card-content ">
                            <span className='card-title activator text-darken-4 flow-text small '>{product.title}</span>
                        </div>
                    <div className='card-reveal black'>
                        <span className='card-title white-text text-darken-4'>{product.title}
                            <i className='material-icons right'>close</i>
                        </span>
                        <p className='white-text'>Estado: {product.condition}</p>
                        <p className='white-text'>Cantidad disponible: {product.available_quantity}</p>
                        <p className='white-text'>Precio: ({product.currency_id}) ${product.price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductCard;