import { Link } from 'react-router-dom'
import Tile from '@components/Tile'
import Button from '@components/Button'
import PageCenter from '@components/PageCenter'
import Input from '@components/Input'

const LoginForm = () => {

    return(
        <PageCenter>
            <Tile>
                <form className="flex flex-col gap-4 px-2 py-4">
                    <h2 className="text-xl font-semibold text-center">
                        Sign In
                    </h2>

                    <input 
                        type="email" 
                        placeholder="Email"
                        className="w-full p-2 border rounded-md"
                    />

                    <input 
                        type="password" 
                        placeholder="Password"
                        className="w-full p-2 border rounded-md"
                    />

                    <label className="flex items-center gap-2 text-sm">
                        <input type="checkbox"/>
                        Remember me
                    </label>

                    <div className="flex gap-2 mt-2 w-full">
                        <Button className="flex-1" type="submit">Sign In</Button>
                        <Button className="flex-1">
                            <Link to="/register">Sign Up</Link>
                        </Button>
                    </div>
                </form>
            </Tile>
        </PageCenter>
    )
}

export default LoginForm