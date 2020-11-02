import React from 'react'
import './home.css'

const Home = () => {

    return (<div>
        <div className='texto white-text welcomeContainer'>
            <h1>Bienvenido a Mercado GPL</h1>
            <h5>Busca un producto o haz click en categorias para iniciar.</h5>
        </div>
        <a href='/contact' className='white-text footer btn'>-| Desarrollado por Juan Bautista Abal |-</a>
    </div>)

}
export default Home;
