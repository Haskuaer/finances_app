import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({onShowMenu}) => {

    return(
        <header className="w-full p-2 bg-main">
            <div className="p-2 inline-flex cursor-pointer rounded-sm hover:bg-d1" onClick={onShowMenu}>
                <GiHamburgerMenu className="text-2xl" />
            </div>
        </header>
    )
}

export default Header
