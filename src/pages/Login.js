import { useState } from 'react'
import login from '../hooks/useLogin'

const Login = () => {

    const [username, setUsername] = useState(null)

    const handleLogin = (e) => {
        e.preventDefault()
        login(username)
        window.location.reload(false)
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input 
                    type="name"
                    placeholder="What is your name?" 
                    onChange={e => setUsername(e.target.value)}
                />
                <button>Play</button>
            </form>
        </div>
    )
}

export default Login