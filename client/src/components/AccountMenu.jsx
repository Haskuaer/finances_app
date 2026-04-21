import { Link } from 'react-router-dom'

const AccountMenu = ({showAccountMenu}) => {
    return(
        <div 
            className={`
                w-42 absolute top-full right-0 mt-2 bg-bg-bgd
                translate transition-transform duration-300
                ${showAccountMenu 
                    ? "translate-y-0 opacity-100 pointer-events-auto" 
                    : "translate-y-2 opacity-0 pointer-events-none"}
            `}
        >
            <ul className="flex flex-col">
                <li><Link to="/account" className="account-menu">Account</Link></li>
                <li><Link className="account-menu">Switch Account</Link></li>
                <li><Link className="account-menu">Log Out</Link></li>
            </ul>
        </div>
    )
}

export default AccountMenu