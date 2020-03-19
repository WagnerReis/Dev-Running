import React from 'react'
import Header from '../Header'
import { Image } from 'semantic-ui-react'
import logoHome from '../assets/logo-home.png'

const Home = props => {
    return (
        <div>
            <Header />
            <Image src={logoHome} size='medium' spaced={true} centered={true} />
        </div>
    )
}

export default Home