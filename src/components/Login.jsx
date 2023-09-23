import React from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const { setUser } = React.useContext(UserContext) 


    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({email, password}) 
    }

    return (
        <div className='bg-blue-200 w-11/12 mx-auto mt-10'>
            <form onSubmit={handleSubmit} className='flex flex-col p-4 gap-3'>
                <input type="email"
                    className='p-3'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email" />
                <input type="password"
                    className='p-3'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password" />
                <button className='p-3 bg-blue-600 text-white font-bold' type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login