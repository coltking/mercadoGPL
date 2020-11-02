import React from 'react'
import 'materialize-css'
import './contact.css'

const Contact = () => {
    return (<div>
        <div className='container container-contact'>
            <h3 className='white-text'>Juan Bautista Abal</h3>
            <h5 className='white-text'>Whatsapp: +54 341 7197294</h5>
            <h6 className='white-text'>Rosario, Santa Fe, Argentina</h6>
            <h6 className='white-text'>
                <div>
                    <a target="_blank" className='btn btn-contact transparent' href="https://www.linkedin.com/in/%F0%9F%87%A6%F0%9F%87%B7-juan-bautista-abal-3618a5b5/">
                        Linkedin:
                        <i className='material-icons white-text right'>insert_link</i>
                    </a>
                    <a target="_blank" className='btn transparent btn-contact' href="https://t.me/JuanBautistaAbal">
                        Telegram:
                        <i className='material-icons white-text right'>insert_link</i>
                    </a>
                </div>
            </h6>
        </div>
        <a href='/' className='btn footer'>volver al inicio</a>
    </div>)
}
export default Contact;
