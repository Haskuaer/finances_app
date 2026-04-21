import { Link } from 'react-router-dom'
import Tile from '@components/Tile'
import Button from '@components/Button'
import PageCenter from '@components/PageCenter'
import Input from '@components/Input'

const RegisterPanel = () => {

    return(
        <PageCenter>
            <Tile>
                <form className="flex flex-col gap-4 px-2 py-4">

                    <h3 className="text-xl font-semibold text-center">
                        Sign Up
                    </h3>

                    <Input type="email" placeholder="Email"/>
                    <Input type="password" placeholder="Password"/>
                    <Input type="password" placeholder="Repeat password"/>

                    <label className="flex items-center gap-2 text-sm">
                        <input type="checkbox"/>
                        Remember me
                    </label>

                    <div className="flex gap-2 mt-2 w-full">
                        <Button className="flex-1" type="submit">Sign Up</Button>
                        <Button className="flex-1" >
                            <Link to="/login">Sign In</Link>
                        </Button>
                    </div>
                </form>
            </Tile>
        </PageCenter>
    )
}

export default RegisterPanel