import { Link } from 'react-router-dom'
import PageCenter from './PageCenter'
import Tile from './Tile'
import Account from '@components/Account'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaShieldAlt } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
import { FaBalanceScale } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";

const Navbar = ({showMenu}) => {

    return(
        <div 
            className={`
                fixed left-0 h-full w-xs bg-bgd shadow-lg transform transition-transform duration-500
                ${showMenu ? "translate-x-0" : "-translate-x-full"}
            `}>

            <ul className="flex flex-col gap-2 p-4">

                <li><Account className="nav-bar"/></li>

                <p className='px-4'>Main Menu</p>

                <li><Link to="/baseline" className="nav-bar">
                    <FaShieldAlt />
                    Baseline
                </Link></li>
                <li><Link to="/transactions" className="nav-bar">
                    <MdOutlinePayments />
                    Transacitons
                </Link></li>
                <li><Link to="/debts" className="nav-bar">
                    <FaBalanceScale />
                    Debts
                </Link></li>
                <li><Link to="/stats" className='nav-bar'>
                    <IoIosStats />
                    Stats
                </Link></li>

                <p>Others</p>

                <li><Link to="/settings" className="nav-bar">
                    Settings
                </Link></li>
                
                <li><Link to="/info" className="nav-bar">
                    Info
                </Link></li>
            </ul>
        </div>
    )
}

export default Navbar