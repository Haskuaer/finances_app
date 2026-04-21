import userIcon from '@assets/user_icon.jpg'
import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AccountMenu from '@components/AccountMenu'
import { GoTriangleDown } from "react-icons/go";

const Account = () => {

    const [username, setUsername] = useState("User")
    const [showAccountMenu, setShowAccountMenu] = useState(false)
    const menuRef = useRef(null)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/user')
                const data = await res.json()
                setUsername(data.name)
            } catch (err) {
                console.error(err)
            }
        }

        fetchUser()
    }, [])

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setShowAccountMenu(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return(
        <div className="p-4 flex items-center gap-2 bg-bg rounded">
            <Link to="/account" className="flex items-center gap-2 font-medium">
                <img src={userIcon} alt="user icon" className="w-10 h-10 rounded-full object-cover"></img>
                {username}
            </Link>
            <div className="ml-auto relative" ref={menuRef}>
                <GoTriangleDown 
                    className="rounded-sm hover:bg-bgd cursor-pointer"
                    onClick={() => setShowAccountMenu(prev => !prev)}
                />
                <AccountMenu showAccountMenu={showAccountMenu} />
            </div>
        </div>

    )
}

export default Account