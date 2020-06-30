import React from 'react'
import '../assets/styles/HomePage.scss'

const HomePage = () => {
    return (
        <div className="landing">
            <div className="row">
                <div className="row__left">

                    <h1>Stress Free</h1>
                    <h1>Subscription Manager</h1>
                    <a href="/#">JOIN NOW</a>
                </div>
                <div className="row__right">
                    <img src="https://i1.wp.com/www.romadecade.org/wp-content/uploads/2019/07/contoh-teks-diskusi.jpg?fit=700%2C400&ssl=1" alt="logo" />
                </div>
            </div>
            <div className="rows">
                <h3>Popular Apps</h3>
                <div className="apps-logo">
                    <img src={require('../assets/images/arcade.png')} alt="arcade" />
                    <img src={require('../assets/images/netflix.png')} alt="netflix" />
                    <img src={require('../assets/images/spotify.png')} alt="spotify" />
                </div>
            </div>

        </div >
    )
}

export default HomePage