import { useState } from "react"
import { UserState } from "../context/UserContext"
import { io } from 'socket.io-client'


const MainMenu = () => {

    const [onlineUsers, setOnlineUsers] = useState(0)

    const { user } = UserState()

    const socket = io.connect('http://localhost:5000')

    socket.on('online_users', data => setOnlineUsers(data))

    const logout = () => {
        localStorage.removeItem('username')
        window.location.reload(false)
    }

    return (
        <div className="main-menu">
            <h1>
                <span>Rock</span>
                <span>Paper</span>
                <span>Scissors</span>
            </h1>

            <div className='buttons-container'>
                <h2>{user}</h2>
                <p>Online: {onlineUsers}</p>

                <div className='start-buttons'>
                    <button>Play With Friend</button>
                    <button>Play With Stranger</button>
                </div>

                <button className='logout-button' onClick={logout}>Logout</button>
            </div>
        </div>
    )
}

export default MainMenu