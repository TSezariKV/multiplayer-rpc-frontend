const Login = () => {

    const handleLogin = () => {
        
    }

    return (
        <div className="Login">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input 
                    type="name"
                    placeholder="What's your name?" 
                />
                <button>Play</button>
            </form>
        </div>
    )
}

export default Login