import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@components/Button'
import Navbar from '@components/Navbar'
import Header from '@components/Header'

const DashboardView = () => {

    const [ showMenu, setShowMenu ] = useState(false)

    return(
        <div>
            <Header onShowMenu={() => setShowMenu(prev => !prev)} />
            <Navbar  showMenu={showMenu} />
        </div>
    )
}

export default DashboardView